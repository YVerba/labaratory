import styles from './Main.module.scss';
import { Voltmeter } from "../components/voltmeter/Voltmeter.tsx";
import { RadioBtn } from "../components/radioBtn/RadioBtn.tsx";
import { Photoresistor } from "../components/photoresistor/Photoresistor.tsx";
import { Sensor } from "../components/sensor/Sensor.tsx";

export const Main = () => {
    return (
        <div>
            <h1 className={styles.title}>Датчики медико-біологічної інформації</h1>
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
        </div>
    )
}
