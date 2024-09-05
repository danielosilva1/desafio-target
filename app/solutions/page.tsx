"use client";

import Fibonacci from '../fibonacci/page';
import RevenuePerState from '../revenue-per-state/page';
import Revenue from '../revenue/page';
import Reverse from '../reverse/page';
import Sum from '../sum/page';
import styles from './page.module.css';

export default function Solutions() {
    return (
        <div className={styles.mainContainer}>
            <Sum></Sum>
            <Fibonacci></Fibonacci>
            <Revenue></Revenue>
            <RevenuePerState></RevenuePerState>
            <Reverse></Reverse>
        </div>
    );
}