"use client";

import { useState } from 'react';
import styles from '../page.module.css';

export default function Fibonacci() {
    const [numberStr, setNumberStr] = useState('');
    const [solution, setSolution] = useState('');

    const calculateFibonacci = () => {
        const number = Number(numberStr);
        if (isNaN(number)) {
            setSolution('Informe um número inteiro');
            return;
        }

        if (number == 0 || number == 1) {
            // Casos base
            setSolution(`O número ${number} pertence à sequência de Fibonacci`);
            return;
        }
        let lastTermFib = [0, 1]; // Armazena últimos dois termos da sequência
        let newTerm = 0;

        while (true) {
            newTerm = lastTermFib[0] + lastTermFib[1];

            if (newTerm == number) {
                setSolution(`O número ${number} pertence à sequência de Fibonacci`);
                return;
            }
            if (newTerm > number) {
                // Novo termo > número: número não pertence à sequência
                setSolution(`O número ${number} NÃO pertence à sequência de Fibonacci`);
                return;
            }
            // Atualiza dois últimos termos da sequência para calcular próximo termo
            lastTermFib[0] = lastTermFib[1];
            lastTermFib[1] = newTerm;
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNumberStr(value);
        setSolution('');
    }

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.questionTitle}>Desafio 2</h1>
            <p className={styles.questionDescription}>
                2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
                <br></br><br></br>
                IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
            </p>
            <h2 className={styles.solutionLabel}>Solução</h2>
            <div className={styles.inputArea}>
                <input type='text'
                       id='number'
                       placeholder='Informe um número inteiro'
                       className={styles.inputBox}
                       onChange={handleInputChange}
                ></input>
                { numberStr != '' && (
                    <button className={styles.submissionButton}
                            onClick={calculateFibonacci}
                    >Enviar</button>
                )}
            </div>
            { solution != '' && (<p className={styles.solution}>{solution}</p>)}
        </div>
    );
}