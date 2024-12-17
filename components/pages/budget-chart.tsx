'use client'

import { useEffect, useRef } from 'react'
import { Chart, ChartConfiguration } from 'chart.js/auto'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BudgetChart() {
    const chartRef = useRef < HTMLCanvasElement > (null)
    const chartInstance = useRef < Chart | null > (null)

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d')
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy()
                }

                const config: ChartConfiguration = {
                    type: 'line',
                    data: {
                        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                        datasets: [
                            {
                                label: 'Revenue',
                                data: [13000, 15000, 12000, 14000, 13500, 15500, 14000],
                                borderColor: 'rgb(53, 162, 235)',
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                tension: 0.1
                            },
                            {
                                label: 'Expenditures',
                                data: [11000, 12000, 11500, 13000, 12500, 13500, 12000],
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                tension: 0.1
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                        },
                        scales: {
                            x: {
                                display: true,
                                title: {
                                    display: true,
                                    text: 'Month'
                                }
                            },
                            y: {
                                display: true,
                                title: {
                                    display: true,
                                    text: 'Value'
                                },
                                suggestedMin: 0,
                                suggestedMax: 20000
                            }
                        }
                    },
                }

                chartInstance.current = new Chart(ctx, config)
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        }
    }, [])

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">Consolidated budget</CardTitle>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">D</Button>
                    <Button variant="ghost" size="sm">M</Button>
                    <Button variant="ghost" size="sm">Y</Button>
                    <Button variant="ghost" size="sm">All</Button>
                    <Button variant="ghost" size="sm">Custom</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[300px]">
                    <canvas ref={chartRef} />
                </div>
            </CardContent>
        </Card>
    )
}

