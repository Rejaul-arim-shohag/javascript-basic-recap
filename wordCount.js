// const myWords = "Mohammad Rejaul karim";
// let count = 0;
// for(let i = 0; i<myWords.length; i++){
//     const char = myWords[i];
//     console.log(char);
//     if(char == ' '){
//        count ++;
//     }
// }
// count ++;

var str = "your long string with many words.";
var wordCount = str.match(/(\w+)/g).length;
console.log(wordCount)