import { useEffect } from 'react';
// @ts-ignore
import styles from './Weight.module.scss';
import {CircleSize, useApparateContext} from '../apparate';
import { useChartContext } from '../chart';

export interface CircleWeight {
    weight: number
    voltage: number
}

const weights = new Map<CircleSize, CircleWeight>([
    ['SMALL', { weight: 96.5, voltage: 20 }],
    ['MEDIUM', { weight: 98.2, voltage: 23 }],
    ['BIG', { weight: 99.2, voltage: 22 }],
    ['BIGGEST', { weight: 101.5, voltage: 27 }]
])

export const Weight = () => {
    const { circleWeights, setCircleWeights, enabled, currentToggle, setVoltage } = useApparateContext()
    const { addPoint } = useChartContext('WEIGHT')

    const handleButtonClick = (size: CircleSize) => {
        setCircleWeights(size)
        if(currentToggle == 0 && enabled) {
            const value = weights.get(size)!
            setVoltage(value.voltage)
            addPoint(value.weight.toString(), { x: value.weight, y: value.voltage })
        }
    };

    useEffect(() => {
        if(circleWeights){
            handleButtonClick(circleWeights)
        } else if(currentToggle == 0) {
            setVoltage(0)
        }
    }, [currentToggle, enabled])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Оберіть вагу тягарця</h1>

            <div className={styles.container}>
                <button
                    className={`${styles.circle} ${styles.circleSmall}`}
                    onClick={() => handleButtonClick('SMALL')}>
                    96,5
                </button>
                <button
                    className={`${styles.circle} ${styles.circleMedium}`}
                    onClick={() => handleButtonClick('MEDIUM')}>
                    98,2
                </button>
                <button
                    className={`${styles.circle} ${styles.circleBig}`}
                    onClick={() => handleButtonClick('BIG')}>
                    99,2
                </button>
                <button
                    className={`${styles.circle} ${styles.circleBiggest}`}
                    onClick={() => handleButtonClick('BIGGEST')}>
                    101,5
                </button>
            </div>
        </div>
    );
};
