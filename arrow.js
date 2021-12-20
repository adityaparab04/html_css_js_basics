let sum = (a, b) => a+b;


console.log(sum(55,7))

let modulo = a => a % 2;

console.log(modulo(51))


let isPositive = num => num >= 0;

console.log(isPositive(8))

const average = (num1, num2, num3) => {
    let sum = num1 + num2 + num3;
    return Math.round(sum/3);
}

console.log(average(3,5,9))