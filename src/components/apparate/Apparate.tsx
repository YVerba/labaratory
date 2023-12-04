import { Photoresistor } from '../photoresistor'
import { RadioBtn } from '../radioBtn'
import { Sensor } from '../sensor'
import { Sensor1 } from '../sensor1/Sensor1.tsx'
import { Voltmeter } from '../voltmeter'
import styles from './Apparate.module.css'

export const Apparate = () => {
    return (
        <div className={styles.main}>
            <div className={styles.sensor}>
                <Sensor1 text={'Тензодатчик'} />
            </div>
            <div className={styles.sensor}>
                <Sensor text={'Термодатчик'} />
            </div>
            <div className={styles.sensor}>
                <Voltmeter />
            </div>
            <div className={styles.sensor}>
                <Sensor text={'Ємнісний датчик'} />
            </div>
            <div className={styles.sensor}>
                <Photoresistor />
            </div>
            <div className={styles.sensor}>
                <RadioBtn />
            </div>
        </div>
    )
}