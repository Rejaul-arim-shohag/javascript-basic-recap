// 5! = 5X4X3X2X1
//4! = 4*3*2*1
//100 = 100*99*98*97*o ma go;

// for (var i = 5; i <=10; i++){
//     console.log(i)
// };

// for (let i = 2; i< 9; i++){
//     console.log(i)
// };

// let factorial = 1;
// for(let i = 1; i<4; i++ ){
//     factorial = factorial *i;
//     console.log(i, factorial)
// };
function factorialNumber(n){
  let factorial = 1;
  for(i = 1; i<=n; i++){
    factorial = factorial*i;
    console.log(i, factorial);
  } 
  
  return factorial;
};
const myFactorial = factorialNumber(4);
console.log(myFactorial);
//4! = 1*2*3*4