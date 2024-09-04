"use client";

import Fibonacci from '../fibonacci/page';
import Sum from '../sum/page';
import styles from './page.module.css';

export default function Solutions() {
    return (
        <div className={styles.mainContainer}>
            <Sum></Sum>
            <Fibonacci></Fibonacci>
        </div>
    );
}