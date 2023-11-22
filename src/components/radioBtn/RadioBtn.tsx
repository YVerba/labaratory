import { useState } from 'react';
import styles from './RadioRtn.module.scss';

export const RadioBtn = () => {
    const [rotation, setRotation] = useState(-45);
    const [activeLamp, setActiveLamp] = useState(1);
    const [clickCount, setClickCount] = useState(0);

    const rotateButton = () => {
        setRotation(rotation + 30);
        setActiveLamp((activeLamp % 4) + 1);
        setClickCount(clickCount + 1)

        if (clickCount === 3) {
            setRotation(-45)
            setClickCount(0)
        }
    };

    return (
        <div>
            <div className={styles.indicators}>
                {[1, 2, 3, 4].map((index) => (
                    <div
                        key={index}
                        className={`${styles.lamp} ${activeLamp === index ? styles.active : ''}`}
                    ></div>
                ))}
            </div>

            <div className={styles.indicatorsNumbers}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>

            <div className={styles.buttonWrapper}>
                <button
                    className={styles.button}
                    onClick={rotateButton}
                    style={{ transform: `rotate(${rotation}deg)` }}
                ></button>
            </div>

            <div className={styles.text}>
                Вибір датчика
            </div>
        </div>
    );
};
