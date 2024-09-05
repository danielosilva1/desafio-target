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
            <div id='q1'>
                <Sum></Sum>
            </div>
            <div id='q2'>
                <Fibonacci></Fibonacci>
            </div>
            <div id='q3'>
                <Revenue></Revenue>
            </div>
            <div id='q4'>
                <RevenuePerState></RevenuePerState>
            </div>
            <div id='q5'>
                <Reverse></Reverse>
            </div>
        </div>
    );
}