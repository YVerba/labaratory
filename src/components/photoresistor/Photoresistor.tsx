import styles from './Photoresistor.module.scss'

export const Photoresistor = () => {
    return (
        <div>
            <div className={styles.photoresistor}>
                <div className={styles.lens}></div>
            </div>

            <div className={styles.text}>
                Фоторезистор
            </div>
        </div>
    )
}