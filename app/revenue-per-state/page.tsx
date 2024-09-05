'use client';

import styles from '../page.module.css';
import { formatCurrency } from '../../utils/formatCurrency';

export default function RevenuePerState() {
    let revenueSP = 67836.43;
    let revenueRJ = 36678.66;
    let revenueMG = 29229.88;
    let revenueES = 27165.48;
    let revenueOthers = 19849.53;
    let totalRevenue = revenueSP + revenueRJ + revenueMG + revenueES + revenueOthers;
    let percentSP = revenueSP/totalRevenue;
    let percentRJ = revenueRJ/totalRevenue;
    let percentMG = revenueMG/totalRevenue;
    let percentES = revenueES/totalRevenue;
    let percentOthers= revenueOthers/totalRevenue;

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.questionTitle}>Desafio 4</h1>
            <p className={styles.questionDescription}>
            4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:<br></br>
            • SP – R$67.836,43<br></br>
            • RJ – R$36.678,66<br></br>
            • MG – R$29.229,88<br></br>
            • ES – R$27.165,48<br></br>
            • Outros – R$19.849,53<br></br>
            <br></br>
            Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
            </p>
            <h2 className={styles.solutionLabel}>Solução</h2>
            <p className={styles.solution}>
                SP – R$ 67.836,43 ({percentSP.toFixed(2)}%)<br></br>
                RJ – R$ 36.678,66 ({percentRJ.toFixed(2)}%)<br></br>
                MG – R$ 29.229,88 ({percentMG.toFixed(2)}%)<br></br>
                ES – R$ 27.165,48 ({percentES.toFixed(2)}%)<br></br>
                Outros – R$ 19.849,53 ({percentOthers.toFixed(2)}%)<br></br>
                Total – {formatCurrency(totalRevenue)}
            </p>
        </div>
    );
}