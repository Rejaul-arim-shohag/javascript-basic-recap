// const number = [45,4, 78, 34];
// let max = number[0];
// for(let i=0; i<number.length; i++ ){
//    let element = number[i];
//    console.log(`this is element ${element}`);
//    if(element>max){
//        max = element;
//    }
// }
// console.log(`Highest value is ${max}`)

const point = [78, 78, 90, 73, 94, 84, 674, 82, 85, 93];
const findArrayMax = Math.max(...point);
console.log(findArrayMax);