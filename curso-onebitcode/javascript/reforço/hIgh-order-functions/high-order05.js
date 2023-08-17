const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
    return number % 2 === 0;
}

function sum(a, b) {
    return a + b;
}

const evenNumbers = numbers.filter(isEven);
const sumOfEvens = evenNumbers.reduce(sum, 0);

console.log("Soma dos números pares:", sumOfEvens);
