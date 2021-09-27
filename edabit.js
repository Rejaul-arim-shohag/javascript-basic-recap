//solve 1st problem
function addToNumber(num1, num2){
    const sum = num1+num2;
    return sum;
}
const myResult = addToNumber(-23, -90);
console.log(myResult);

//convert minutes into seconds
function minutesIntoSecond(minute){
    const seconds = minute*60;
    return seconds;
}
const myMinute = 3;
const mySeconds =  minutesIntoSecond(myMinute);
console.log(mySeconds);

//return the next number
function returnNextNumber(currentNum){
    const nextNumber = currentNum+1;
    return nextNumber;
}
const myNextNumber = returnNextNumber(100);
console.log(myNextNumber);

//areia of triangle
function areiaOfTriangle(base, height){
    const area = base*height/2;
    return area;
};
const homeArea = areiaOfTriangle(2, 2);
console.log(homeArea);

//age to day converter
function ageToDay(age){
    const day = age*365;
    return day;
};
const age = 21;
const day = ageToDay(age);
console.log(day);

//buggy cubes
function cubesConverter(num){
    const cubesResult = num*num*num;
    return cubesResult;
};
const cubesRes = cubesConverter(10);
console.log(cubesRes);

//name length cheking and change
function nameLengthChecking(name){
    if(name.length>6){
        const changeName = "karim"
        return changeName;
    };
    
};

const myName = "Mohammad Rjaul";
const changeAbleName = nameLengthChecking(myName);
console.log(changeAbleName);

// return the first element of an array
function arrayFirstElement(inputArray){
    const first = inputArray[0];
    return first;
};
const myArray = [19060, 45, 89, 90];
const myResult = arrayFirstElement(myArray);
console.log(myResult);

function circuitPower(voltage, current) {
	const totalPower = voltage*current;
	return totalPower;
}
const rejaulKarimCircuit = (45, 89);
const rejaulKarimPower = circuitPower(rejaulKarimCircuit);
console.log(rejaulKarimPower)

function addTwoNumber(num1, num2){
    const total = num1*num2;
    return total;
};
const myArry = [7, 8, 9, 7, 6, 7, 6];
const myResult= addTwoNumber(myArry[0], myArry[1]);
console.log(myResult);

