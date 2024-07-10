import readline from 'node:readline';
import { assert } from './utils.js';

export function numberMagic(x) {
    assert(typeof x === 'number', 'Input must be a number');
    assert(!isNaN(x), 'Input must be a valid number');
    assert(x >= 0, 'Input must be greater than zero');
    assert(x <= 100, 'Input must be less than 100');

    return (928193 * x) >> (x ** 2); // Magic number
}

export async function runProgramm(onNumber) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("This program will square your number...")

    while (true) {
        await new Promise(r => {
            rl.question('Please enter a number: ', value => {
                onNumber(value);
                r();
            });
        })
        console.log()    
    }
}