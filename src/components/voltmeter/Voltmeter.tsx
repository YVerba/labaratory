import styles from './Voltmeter.module.scss'

export const Voltmeter = () => {
    return (
        <div>
            <div className={styles.numbers}>
                <div>100</div>
                <div>50</div>
                <div>0</div>
                <div>50</div>
                <div>100</div>
            </div>

            <div className={styles.scale}></div>
            <div className={styles.vIndicator}></div>
            <div className={styles.vLabel}>V</div>
        </div>
    )
}