//without return feet to inch
// function feetToInch(feet){
//     const inch =  feet*12;
//     console.log(inch)
//  }
//  feetToInch(6)


//inch to feet
// function inchToFeet(inch){
//     const fit = inch/12;
//     return fit;
// };
// const rejaulInch = 66;
// const rejaulFeet = inchToFeet(rejaulInch);
// console.log(rejaulFeet);

//feet to inch
function feetToInch(feet){
    const inch = feet*12;
    return inch;
};
const allInch =[56, 90, 78, 98, 78, 56]

const karimInch = feetToInch(allInch[0]);
console.log(`This is karimInch ${karimInch}`);

const HakimInch = feetToInch(allInch[1]);
console.log(`This is HakimInch ${HakimInch}`);

const rakibInch = feetToInch(allInch[2]);
console.log(`This is rakibInch ${rakibInch}`);

const rayhanInch = feetToInch(allInch[3]);
console.log(`This is rayhanInch ${rayhanInch}`);



