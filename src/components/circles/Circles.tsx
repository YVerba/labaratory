import { useState } from 'react';
import styles from './Circles.module.scss';



export const Circles = () => {
    const [selectedCircle, setSelectedCircle] = useState('');

    const handleButtonClick = (size: string) => {
        setSelectedCircle(size);
    };

    const renderSelectedCircle = () => {
        return (
            <div className={styles.selectedCircle}>
                <button className={styles[selectedCircle]}>{selectedCircle}</button>
            </div>
        );
    };

    return (
        <div>
            <h1 className={styles.title}>Обрати площу круга</h1>

            <div className={styles.wrapper}>
                <button
                    className={styles.circleBig}
                    onClick={() => handleButtonClick('circleBig')}
                >
                    491мм<sup>2</sup>
                </button>
                <button
                    className={styles.circleMedium}
                    onClick={() => handleButtonClick('circleMedium')}
                >
                    380мм<sup>2</sup>
                </button>
                <button
                    className={styles.circleSmall}
                    onClick={() => handleButtonClick('circleSmall')}
                >
                    177мм<sup>2</sup>
                </button>
            </div>

            {renderSelectedCircle()}
        </div>
    );
};
