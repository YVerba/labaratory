import styles from './Table.module.css'
import { ChartType, useChartContext } from '../chart';

export interface TableProps {
    type: ChartType
    label: string
}

export const Table = ({ label, type }: TableProps) => {
    const state = useChartContext(type)

    return (
        <div className={styles.table}>
            <table>
                <tr>
                    <th>{label}:</th>
                    {state.data.map(point => (
                        <td>{point.x}</td>
                    ))}
                </tr>
                <tr>
                    <th>Вольтаж:</th>
                    {state.data.map(point => (
                        <td>{point.y}</td>
                    ))}
                </tr>
            </table>
        </div>
    )
}