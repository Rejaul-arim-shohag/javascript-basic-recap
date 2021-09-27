
// //not the right way
// function leapYearCheck(year){
//     const reminder = year%4;
//     if(reminder===0){
//         // console.log(`${year} is leap year`)
//         return true;
//     } else if(reminder === 1){
//         // console.log(`${year} is not leap year`)
//         return "3 year baki";
//     } else if(reminder === 2){
//         // console.log(`${year} is not leap year`)
//         return "2 year baki";
//     } else{
//         return true;
//     }

// };

// const year = [2375, 886, 8690,2021];

// const myYear = leapYearCheck(year[0]);
// console.log(myYear)
// const torYear = leapYearCheck(year[3]);
// console.log(torYear);


// //it is right way
function leapYearCheck(year){
    if((0===year%4) && (0 != year%100) || (0==year%400)){
        return true;
    } else{
        return false;
    }
};

const myYear = leapYearCheck(2000);
console.log(myYear)