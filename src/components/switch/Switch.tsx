import React from 'react';
import styles from './Switch.module.scss';

export const Switch = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Під'єднати макет до мережі</h1>
            <input type="checkbox" id={styles.highload1} name="highload1" className={styles.highload1} />
            <label htmlFor={styles.highload1} data-onlabel="Вкл" data-offlabel="Викл" className={styles.lb1}></label>
        </div>
    );
}
