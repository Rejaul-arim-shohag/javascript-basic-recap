function largestNumber(num1, num2, num3){
    if((num1>num2) && (num1>num3)){
        return num1;
    }
     else if((num2>num1)&& (num2>num3)){
        return num2;
    } 
    else{
        return num3;
    }
};

function minimumNum(num1, num2, num3){
    if((num1<num2)&&(num1<num3)){
        return num1;
    } else if((num2<num1)&&(num2<num3)){
        return num2;
    } else{
        return num3;
    }
}
// const myMaxNum = largestNumber(45, 9,4);
// const myMinNum = minimumNum(54, 78,6);
// const maxAndMinSum = myMaxNum + myMinNum;
// console.log(maxAndMinSum);

//find max number of
function findMaxNumber(n1, n2, n3){
    const maxNumber = Math.min(n1, n2, n3);
    return maxNumber;
}
const myThreeNumber = findMaxNumber(6883,88889, 674);
console.log(myThreeNumber)

