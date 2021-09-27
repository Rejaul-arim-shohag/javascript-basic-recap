// let fibo = [0, 1];
// // fibo[2]= fibo[2-1]+fibo[2-2];
// // fibo[89] = fibo[89-1]+fibo[89-2];
// // fibo[n]= fibo[n-1]+fibo[n-2];
// for(let i = 2; i<=10; i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
//     // console.log(i, fibo, )
// };
// console.log(fibo);

// // for(let i = 4; i<10; i++ ){
// //     console.log(i)
// // }

let fibonacchi = [0, 1];
function fibonacchiSequence(num){
    for (let i = 2; i<=num; i++){
      fibonacchi[i] = fibonacchi[i-1]+fibonacchi[i-2] 
    }
    return fibonacchi;

}

const karimNumber = 9;
const karimFibonacchiResult = fibonacchiSequence(karimNumber);
console.log(fibonacchi)



