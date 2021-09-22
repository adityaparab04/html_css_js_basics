function factorial(num1, num2, num3){
    average = (num1 + num2 + num3)/3
    let f1 = 1;
    for(let i = num1; i>=1; i--){
        f1 = f1 * i;
    }
    
    
    let f2 = 1;
    for(let i = num2; i>=1; i--){
        f2 = f2 * i;
    }

    let f3 = 1;
    for(let i = num3; i>=1; i--){
        f3 = f3 * i;
    }
    return (Math.floor((f1+f2+f3) / average));

}
console.log(factorial(2, 5, 6));



function question4(num1, num2, num3){
    function fact(num){
        if (num === 0 || num === 1) return 1;
        else{
            for(let i = num-1; i>=1; i--){
                num = num * i;
            }
        }
        return num;
    }
    let sum = fact(num1) + fact(num2) + fact(num3);
    let average = ((num1)+(num2)+(num3))/3;
    return output =  sum / average;
    
}

console.log(Math.floor(question4(2, 5, 6)))