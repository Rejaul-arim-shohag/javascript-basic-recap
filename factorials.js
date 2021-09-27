// function factorialNumber(number){
//     let factor = 1;
//     for(let i = 0; i<=number; i++){
//        console.log(i);
//        factor = factor*i;
//        ;
//     }
// }
// const myFactorial = factorialNumber(4);

function factorialRecursion(num){
    if(num === 0){
        return 1;
    } else{
        return num*factorialRecursion(num-1)
    }
}

const myrecursion = factorialRecursion(5);
console.log(myrecursion);






// 4! = 1*2*3*4
function factorial (num){
    let fact = 1;
    for(let i = 1; i<num; i++){
         fact = fact*i;
    } return fact;
};
const myFact = factorial(4);
console.log(myFact);

//loop er modde jokhn .length dekhmu tokhn bujte hobe eta ekta array,  bkz array vhara kno kichute .length hoyna












