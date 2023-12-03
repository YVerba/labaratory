import { useApparateContext } from '.'
import { Photoresistor } from '../photoresistor'
import { RadioBtn } from '../radioBtn'
import { Sensor } from '../sensor'
import { Voltmeter } from '../voltmeter'
import styles from './Apparate.module.css'

export const Apparate = () => {
    return (
        <div className={styles.main}>
            <div className={styles.sensor}>
                <Sensor text={'Тензодатчик'} />
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