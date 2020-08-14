/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    for(let i=1; i<=n; i++) {
        if(i%3 !== 0 && i%5 !== 0) {
        console.log(i);
        }
        else if(i%3 === 0 && i%5 !== 0) {
        console.log('Fizz');
        }
        else if(i%3 !== 0 && i%5 === 0) {
            console.log('Buzz');
        }
        else if(i%3 === 0 && i%5 === 0) {
            console.log('FizzBuzz');
        }
    }    
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    fizzBuzz(n);
}
