import { ChartType, useChartContext } from "./ChartState"
import { Line } from 'react-chartjs-2'
import styles from './Chart.module.css'

export interface ChartProps {
    type: ChartType
    label: string
    xAxisLabel: string
}

export const Chart = ({ type, label, xAxisLabel }: ChartProps) => {
    const state = useChartContext(type)

    return (
        <div className={styles['chart-container']}>
            <Line
                data={{
                    labels: state.data.map(point => point.x),
                    datasets: [{
                        data: state.data,
                        label,
                    }],
                }}
                options={{
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: xAxisLabel,
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Напруга',
                            }
                        }
                    }
                }} />
        </div>
    )
}