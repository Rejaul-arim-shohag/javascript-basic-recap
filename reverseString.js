function reverseString(str){
    let reverse = "";
    for(let i = 0; i<str.length; i++){
        let char = str[i];
        reverse = char + reverse;
    } 
    return reverse;
};

const myStateMent = "Hello alien I am coming on The MongolGroho";
const aleyenStr = reverseString(myStateMent);
console.log(aleyenStr);