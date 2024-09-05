"use client";

import { useEffect, useState } from 'react';
import styles from '../page.module.css';
import { formatCurrency } from '../../utils/formatCurrency';

interface DailyRevenueFormat {
    "dia": string,
    "valor": number
}

export default function Revenue() {
    const [minRevenue, setMinRevenue] = useState({'revenue': 0, 'day': ''}); // Faturamento mínimo e dia que ocorreu
    const [maxRevenue, setMaxRevenue] = useState({'revenue': 0, 'day': ''}); // Faturamento máximo e dia que ocorreu
    const [daysAboveAvg, setDaysAboveAvg] = useState(0);

    const getStatistics = (data: DailyRevenueFormat[]) => {
        let countDays = 0; // Dias com faturamento
        let sumRevenue = 0;
        let minRevenueValue = data[0].valor;
        let minRevenueDay = '1';
        let maxRevenueValue = data[0].valor;
        let maxRevenueDay = '1';

        for (let i=0; i<data.length; i++) {
            let revenue = data[i].valor;
            let day = data[i].dia;
            
            if (revenue != 0) {
                // Houve faturamento no dia: não é fim de semana nem feriado
                countDays += 1;
                if (revenue < minRevenueValue) {
                    minRevenueValue = revenue;
                    minRevenueDay = day;
                } else if (revenue > maxRevenueValue) {
                    maxRevenueValue = revenue;
                    maxRevenueDay = day;
                }
                sumRevenue += revenue;
            }
        }
        const avgRevenue = sumRevenue/countDays;
        let countAboveAvg = 0;

        // Verificando em quantos dias o faturamento ficou acima da média
        for (let i=0; i<data.length; i++) {
            if (data[i].valor > avgRevenue) {
                countAboveAvg += 1;
            }
        }

        setDaysAboveAvg(countAboveAvg);
        setMinRevenue({'revenue': minRevenueValue, 'day': minRevenueDay});
        setMaxRevenue({'revenue': maxRevenueValue, 'day': maxRevenueDay});
    }

    useEffect(() => {async function loadData() {
        // Carrega os dados salvos no arquivo dados.json
        const result = await fetch('/dados.json');
        const data = await result.json();
        getStatistics(data);
    }
    loadData();
    }, []);

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.questionTitle}>Desafio 3</h1>
            <p className={styles.questionDescription}>
            3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:<br></br>
            • O menor valor de faturamento ocorrido em um dia do mês;<br></br>
            • O maior valor de faturamento ocorrido em um dia do mês;<br></br>
            • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.<br></br>
            <br></br>
            IMPORTANTE:<br></br>
            a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;<br></br>
            b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.
            </p>
            <h2 className={styles.solutionLabel}>Solução</h2>
            <p className={styles.solution}>
                Menor faturamento: {formatCurrency(minRevenue.revenue)} no dia {minRevenue.day}<br></br>
                Maior faturamento: {formatCurrency(maxRevenue.revenue)} no dia {maxRevenue.day}<br></br>
                Houve faturamento acima da média em {daysAboveAvg} {daysAboveAvg > 1 ? 'dias' : 'dia'}
            </p>
        </div>
    );
}