// const num1 = 5.85875;
// const num2 = Math.floor(num1);
// const num3 = Math.ceil(num1);

// //round numbers
// const roundNumber=Math.round(num1);
// console.log(roundNumber);

//random numbers
// const randomNumber = Math.random()*100;
// console.log(randomNumber);
// const randomNumberRound = Math.round(randomNumber)
// console.log(randomNumberRound);

// for (let i = 0; i < 5; i++) {
//     const randomNumber = Math.random() * 100;
//     // console.log(randomNumber)
//     const randomNumberRound = Math.round(randomNumber)
//     console.log(randomNumberRound);
// }

// random number with functional overflow
// function randomNum(studentsNumber){
//     for(let i = 50; i<studentsNumber.length; i++){
//         const loteryWiner = Math.random()*studentsNumber;
//         const lotterWinerRound = Math.round(loteryWiner);
//         console.log(lotterWinerRound);
//     }
// };

// const allStudentsNumber = randomNum(91);

// for (let index = 8; index < 10; index++) {
//     const random = Math.random();
//     console.log(`random ${random}`)
//     const randomMath = random *index
//     console.log(`Index ${index}`);
//     console.log(randomMath)
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// };

// const ourClassRoll = getRandomInt(921550, 921591);
// console.log(ourClassRoll);

//loutery system
function getRandomNumber(max, min){
    const randomNum = Math.random()*(max-min)+min;
    return Math.round(randomNum);
};

const myNum = getRandomNumber(10, 20);
console.log(myNum);


