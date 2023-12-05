// @ts-ignore
import styles from './ThermoSensor.module.scss'

export const ThermoSensor = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Підігрів води</h1>

            <div className={styles.pot}></div>
            <div className={styles.water}></div>

            <div className={styles.thermometer}>
                <div className={styles.degrees}>
                    <div>0</div>
                    <div>10</div>
                    <div>20</div>
                    <div>30</div>
                    <div>40</div>
                    <div>50</div>
                    <div>60</div>
                    <div>70</div>
                </div>
                <div className={styles.scaleWrapper}>
                    <div className={styles.scale}></div>
                </div>
            </div>

            <div className={styles.stove}>
                <button className={styles.button}>Старт</button>
            </div>
        </div>
    );
}