// function multipulation(num){
//     for(let i = 1; i<=10; i++){
//         const result = i*num;
//         console.log(i)
//         return result;
        
//     }
    
// };

// const myNum = multipulation(10);
// console.log(myNum)

function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    } else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
}

const mynum = fibonacci(10);
console.log(mynum);
