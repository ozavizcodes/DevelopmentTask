import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//prime numbers are 2,3 5, 7, 11,13,17...
const isPrimeNum = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    //loop through odd numbers frm 3 upto the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

const generateNumber = (count, generatedNumbers) => {
    const primes = [];
    let num = 2;
    while (primes.length < count) {
        if (isPrimeNum(num) && !generatedNumbers.includes(num)) {
            primes.push(num);
        }
        num++
    }
    return primes

}

const MyComponent = () => {
    const [primes, setPrimes] = useState([]);
    const [generatedNumbers, setGeneratedNumbers] = useState([]);



    const handleRun = () => {
        const newPrimes = generateNumber(10, generatedNumbers);
        setPrimes(newPrimes);
        setGeneratedNumbers(generatedNumbers.concat(newPrimes));
    }

    return (
        <div className="container">
            <header className="header">
                <h2>Hello, welcome to PrimeNumbersGenerator!</h2>
            </header>
            <div className="content">

                <p className="display-txt">Generate and display prime numbers as you go..</p>
                <button className="btn-add-more" onClick={handleRun}> <FontAwesomeIcon icon={faPlay} /> Run</button>
            </div>
            <div className="prime-list">
                {primes.map((prime, index) => (
                    <div key={index} className="prime-number">
                        {prime}
                    </div>
                ))}
            </div>
            <footer className="footer">
                <p>Prime Number Generator by ozaviz</p>
            </footer>

        </div>
    )

}

export default MyComponent;