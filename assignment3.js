//kilometer to meter
function kilometerToMeter(kilometer) {
    const absoluteNumber = Math.abs(kilometer)
    const meter = absoluteNumber * 1000;
    if (meter == 0) {
        return "are you crazy? whay you go 0 meter?"
    } else {
        return meter;
    }
}
const meter = kilometerToMeter(5);
//Budget calculator
function budgetCalculator(watch, phone, laptop) {
    if (watch <= 0 || phone <= 0 || laptop <= 0) {
        return 'you can not input negetive number, please input a positive number'
    }
    {
        const watchPrice = watch * 50;
        const phonePrice = phone * 100;
        const laptopPrice = laptop * 500;
        const totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
};
const reajulKarimMarket = budgetCalculator(7, 5, 10);
//Hotel Budegt Calculator
function hotelCost(inputDay){
    let day = 0;
    if(inputDay<=10){
        const firstTendayCost = inputDay*100;
        return firstTendayCost;
    } else if(inputDay<=20){
        day = inputDay-10;
        const firstTenDayCost = inputDay*100;
        const secondTenDayCost = day*80;
        const twentyDayCost = firstTenDayCost+secondTenDayCost;
        return twentyDayCost;
    }else{
        day = inputDay-20;
        const firstTendayCost = inputDay*100;
        const secondTenDayCost = day*80;
        const overTwentyDay = day*50;
        const overTotalDayCost = firstTendayCost + secondTenDayCost + overTwentyDay;
        return overTotalDayCost;
        
    }
};
const rejaulKarimDay =  hotelCost(11);
// console.log(rejaulKarimDay);
function hotelBudget(day){
    let taka = 0;
    if(day<=10){
        taka = day*100;
        return taka;
    } else if(day<=20){
        const firstTendayCost = 10*100;
        const remainingDay = day-10;
        const secondTenDayCost = remainingDay*80;
        taka = firstTendayCost + secondTenDayCost;
        return taka;
    } else if(day<=30){
        const firstTendayCost = 10*100;
        const secondTenDayCost = 10*80;
        const remaingDay = day-20;
        const thirdTenCost = remaingDay*50;
        taka = firstTendayCost + secondTenDayCost+thirdTenCost;
        return taka;
    } else{
        const firstTenDayCost = 10*100;
        const secondTenDayCost = 10*80;
        const thirdTenDayCost = 10*50;
        const remaingDay = day-30;
        const fourthPartDay = remaingDay*20;
        taka = firstTenDayCost + secondTenDayCost + thirdTenDayCost+fourthPartDay;
        return taka;
    }
}

const rejaulKarimBill = hotelBudget(31);
// console.log(rejaulKarimBill);


//Mega Friend
// function megaFriend(array){
//     const megaName = Math.max(array)
//     return megaName;
// }
// const myFriend = ["karim", "Mohammad Rejaul"];
// const myBigFriendName = megaFriend(myFriend);
// console.log(myBigFriendName);

function megaFriend(friends){
    if(friends.length > 0){
        let bigFriend = friends[0];
        for(let i = 0; i<friends.length; i++){
            let newBigFriend = friends[i];
            if(typeof newBigFriend ==="number"){
                return "please use a name"
            }else{
                if(newBigFriend.length>bigFriend.length){
                    bigFriend = newBigFriend;
                }
            }
        }
        return bigFriend;
    }
}
const friendList = ['Mohammad Rejaul karim', "Mahabub alam", "Mahabub alam babul", "Bangladesh is our country"];
const biggestName = megaFriend(friendList);
console.log(biggestName);

