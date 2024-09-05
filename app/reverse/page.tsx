'use client';

import { ChangeEvent, useState } from 'react';
import styles from '../page.module.css';

export default function Reverse() {
    const [string, setString] = useState('');
    const [reversedString, setReversedString] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(false);

    const getReversedString = () => {
        let lastChar = null;
        let reversedStr = '';
        
        for (let i=string.length-1; i>=0; i--) {
            lastChar = string[i];
            console.log(lastChar);
            reversedStr += lastChar;
        }
        if (string.toLowerCase() == reversedStr.toLowerCase()) {
            setIsPalindrome(true);
        }
        setReversedString(reversedStr);
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setString(value);
        setReversedString('');
        setIsPalindrome(false);
    }
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.questionTitle}>Desafio 5</h1>
            <p className={styles.questionDescription}>
            5) Escreva um programa que inverta os caracteres de um string.
            <br></br>
            <br></br>IMPORTANTE:
            <br></br>a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
            <br></br>b) Evite usar funções prontas, como, por exemplo, reverse.
            </p>
            <h2 className={styles.solutionLabel}>Solução</h2>
            <div className={styles.inputArea}>
                <input type='text'
                       placeholder='Insira uma string'
                       className={styles.inputBox}
                       onChange={handleChangeInput}
                ></input>
                { string != '' && (
                    <button className={styles.submissionButton}
                            onClick={getReversedString}
                    >Enviar</button>
                )}
            </div>
            { reversedString != '' && (
                <p className={styles.solution}>
                    {reversedString}<br></br>
                    { isPalindrome && ('💡 string é um palíndromo')}
                </p>
            )}
        </div>
    );
}