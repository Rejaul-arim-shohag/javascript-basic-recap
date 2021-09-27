function fibonacciWhile(num){
    let fibo = [0,1];
    let i = 2;
    while(i<=num){
        fibo[i] = fibo[i-1]+fibo[i-2];
        i++
    } return fibo;
}

const myFibo = fibonacciWhile(10);
console.log(myFibo);
