// function factorialRecursive(n){
//     let factorial = 1;
//     if(0===n){
//         return 1;
//     } else{
//         return n*factorial(n-1)
//     }
// };

// const myFactorial = factorialRecursive(5);
// console.log(myFactorial)
function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
};

const myfact=factorial(10);
console.log(myfact);