import {useState} from 'react';
// @ts-ignore
import styles from './Weight.module.scss';

interface Circle {
    weight: string;
}

export const Weight = () => {
    const [circles, setCircles] = useState<Circle[]>([]);

    const handleCircleClick = (weight: string) => {
        const newCircle = {
            weight,
        };

        setCircles((prevCircles) => [...prevCircles, newCircle]);
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Оберіть вагу тягарця</h1>

            <div className={styles.container}>
                <div className={`${styles.circle} ${styles.circleSmall}`} onClick={() => handleCircleClick('96,5')}>
                    96,5
                </div>
                <div className={`${styles.circle} ${styles.circleMedium}`} onClick={() => handleCircleClick('98,2')}>
                    98,2
                </div>
                <div className={`${styles.circle} ${styles.circleBig}`} onClick={() => handleCircleClick('99,2')}>
                    99,2
                </div>
                <div className={`${styles.circle} ${styles.circleBiggest}`} onClick={() => handleCircleClick('101,5')}>
                    101,5
                </div>
            </div>

            {circles.map((circle, index) => (
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
