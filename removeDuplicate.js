const names = [3, 4, 5, 6, 5, 3, 7, 8, 9, 12, 34, 23, 2, 4, 6, 5, 89,80];
const uniqName = [];
for(let i = 0; i<names.length; i++){
    const element = names[i];
    const index = uniqName.indexOf(element)
    if(index == -1){
        uniqName.push(element)
    }
}

console.log(uniqName)
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
const checkIndex = beasts.indexOf('anty');
console.log(checkIndex);
const myNum = [12, 34, 6, 8, 9, 8, 7, 6];
const checkIndex = myNum.indexOf(9);
console.log(checkIndex);
