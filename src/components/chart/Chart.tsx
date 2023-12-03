import { ChartType, useChartContext } from "./ChartState"
import { Line } from 'react-chartjs-2'
import styles from './Chart.module.css'

export interface ChartProps {
    type: ChartType
    label: string
}

export const Chart = ({ type, label }: ChartProps) => {
    const state = useChartContext(type)

    return (
        <div className={styles['chart-container']}>
            <Line
                data={{
                    labels: state.data.map(point => point.x),
                    datasets: [{
                        data: state.data,
                        label
                    }]
                }} />
        </div>
    )
}