function rightTriangle(a, b){
    const result = 0.5*a*b;
    return result;
};
const myAandB = rightTriangle(12,7);
console.log(myAandB)

function seriesSum(num){
    let sum;
    sum = num*(num+1)/2;
    console.log(sum)
};
//1+2+3+4+5+6+7+8+9+10+11
const mySum = seriesSum(9);