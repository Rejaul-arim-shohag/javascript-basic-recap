


function factorialWhile(num) {
    let i = 1;
    let factorial = 1;
    while (i <= num) {
        factorial = factorial * i;
        console.log(factorial);
        i++
    }
    return factorial;
};
const myFactorial = factorialWhile(5);
console.log(myFactorial);


//5X4X3X2X1