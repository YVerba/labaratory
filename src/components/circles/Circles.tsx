import { useEffect } from 'react';
// @ts-ignore
import styles from './Circles.module.scss';
import { ThermalSensorSize, useApparateContext } from '../apparate';
import { useChartContext } from '../chart';
// import formatters from "chart.js/dist/core/core.ticks";
// import values = formatters.values;

type ThermalSensorValue = {
    s: number,
    voltage: number
}

const thermalSensorValues = new Map<ThermalSensorSize, ThermalSensorValue>([
    ['LARGE', {s: 491, voltage: 37}],
    ['MEDIUM', {s: 380, voltage: 41}],
    ['SMALL', {s: 177, voltage: 58}],
])

export const Circles = () => {
    const { setThermalSensorSize, setVoltage, thermalSensorSize, currentToggle, enabled } = useApparateContext()
    const { addPoint } = useChartContext('PHOTORESISTOR')

    const handleButtonClick = (size: ThermalSensorSize) => {
        setThermalSensorSize(size)
        if(currentToggle == 3 && enabled) {
            const value = thermalSensorValues.get(size)!
            setVoltage(value.voltage)
            addPoint(value.s.toString(), { x: value.s, y: value.voltage })
        }
    };

    useEffect(() => {
        if(thermalSensorSize){
            handleButtonClick(thermalSensorSize)
        } else if(currentToggle == 3) {
            setVoltage(0)
        }
    }, [currentToggle, enabled])

    return (
        <div>
            <h1 className={styles.title}>Оберіть площу круга</h1>

            <div className={styles.wrapper}>
                <button
                    className={styles.circleBig}
                    onClick={() => handleButtonClick('LARGE')}
                >
                    491мм<sup>2</sup>
                </button>
                <button
                    className={styles.circleMedium}
                    onClick={() => handleButtonClick('MEDIUM')}
                >
                    380мм<sup>2</sup>
                </button>
                <button
                    className={styles.circleSmall}
                    onClick={() => handleButtonClick('SMALL')}
                >
                    177мм<sup>2</sup>
                </button>
            </div>
        </div>
    );
};
