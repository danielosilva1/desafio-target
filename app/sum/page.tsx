"use client";

import styles from '../page.module.css';

export default function Sum() {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.questionTitle}>Desafio 1</h1>
            <p className={styles.questionDescription}>
                1) Observe o trecho de código abaixo:
                <br></br>
                int INDICE = 13, SOMA = 0, K = 0;
                <br></br>
                {'Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }'}
                <br></br>
                Imprimir(SOMA);
                <br></br>
                Ao final do processamento, qual será o valor da variável SOMA?
            </p>
            <h2 className={styles.solutionLabel}>Solução</h2>
            <p className={styles.solution}>
                0  + 1 = 1
                <br></br>1  + 2 = 3
                <br></br>3  + 3 = 6
                <br></br>6  + 4 = 10
                <br></br>10 + 5 = 15
                <br></br>15 + 6 = 21
                <br></br>21 + 7 = 28
                <br></br>28 + 8 = 36
                <br></br>36 + 9 = 45
                <br></br>45 + 10 = 55
                <br></br>55 + 11 = 66
                <br></br>66 + 12 = 78
                <br></br>78 + 13 = <b>91</b>
            </p>
        </div>
    );
}