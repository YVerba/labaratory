import styles from './Table.module.css'
import {useApparateContext} from "../apparate";

export interface TableProps {
    label: string
}

export const Table = ({label}: TableProps) => {

    const {} = useApparateContext()

    return (
        <div className={styles.table}>
            <table>
                <tbody>
                <tr>
                    <td>{label}:</td>
                </tr>
                <tr>
                    <td>Вольтаж:</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}