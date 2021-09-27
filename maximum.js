function biggestNum(a,b,c){
    if((a>b) && (a>c)){
       console.log(`The Biggest Number of ${a}`)
    }else if((b>a) && (b>c)){
        console.log(`The Biggest Number of ${b}`)
    } else{
        console.log(`The Biggest Number of ${c}`)
    }
    
}
const myNum = biggestNum(5600, 605, 98887)