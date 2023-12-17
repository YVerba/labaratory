import { useEffect } from 'react';
// @ts-ignore
import styles from './Weight.module.scss';
import { useApparateContext } from '../apparate';
import { useChartContext } from '../chart';

export interface CircleWeight {
    weight: number
    voltage: number
}

const weights = new Map<number, CircleWeight>([
    [1, { weight: 96.5, voltage: 20 }],
    [2, { weight: 98.2, voltage: 23 }],
    [3, { weight: 99.2, voltage: 22 }],
    [4, { weight: 101.5, voltage: 23 }]
])

export const Weight = () => {
    const { circleWeights, setCircleWeights, enabled, currentToggle, setVoltage } = useApparateContext()
    const { addPoint } = useChartContext('WEIGHT')

    const update = (weights: CircleWeight[]) => {
        if (currentToggle == 0 && enabled && weights.length > 0) {
            const voltage = weights.map((e) => e.voltage).reduce((acc, curr) => acc + curr)
            setVoltage(voltage)

            const weight = weights.map((e) => e.weight).reduce((acc, curr) => acc + curr)
            addPoint(`${weight}:${voltage}`, { x: parseFloat(weight.toFixed(1)), y: voltage })
        }
    }

    const handleCircleClick = (circleNum: number) => {
        const weight = weights.get(circleNum)!
        const currentWeights = [...circleWeights, weight]
        const voltage = currentWeights.map((e) => e.voltage).reduce((acc, curr) => acc + curr)
        if(voltage <= 100) {
            setCircleWeights([...circleWeights, weight])
            update(currentWeights)
        }
    };

    useEffect(() => {
        if (enabled && currentToggle == 0 && circleWeights.length > 0) {
            update(circleWeights)
        } else if(currentToggle == 0) {
            setVoltage(0)
        }
    }, [currentToggle, enabled])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Оберіть вагу тягарця</h1>

            <div className={styles.container}>
                <div
                    className={`${styles.circle} ${styles.circleSmall}`}
                    onClick={() => handleCircleClick(1)}>
                    96,5
                </div>
                <div
                    className={`${styles.circle} ${styles.circleMedium}`}
                    onClick={() => handleCircleClick(2)}>
                    98,2
                </div>
                <div
                    className={`${styles.circle} ${styles.circleBig}`}
                    onClick={() => handleCircleClick(3)}>
                    99,2
                </div>
                <div
                    className={`${styles.circle} ${styles.circleBiggest}`}
                    onClick={() => handleCircleClick(4)}>
                    101,5
                </div>
            </div>

            {circleWeights.map((circle, index) => (
                <div
                    key={index}
                    className={`${styles.circle} ${styles.circleNew}`}
                >
                    {circle.weight}
                </div>
            ))}
        </div>
    );
};
