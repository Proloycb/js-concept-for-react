// 'alams', 5, true, {}, []
// '', false, null, undefined
// check truthy

let myVar = 5;
// check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){
    
}


const money = 800;
let food;
if(money > 100){
    food = 'biriyani khabo';
}
else{
    food = 'cha biscuit khabo';
}

// ternery operator
let food1 = money > 100 ? 'biriyani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar> 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string convertion
const num = 54;
// console.log(num);
const numStr =  num + '';
// console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);

let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || showUser();

// toggle boolean
isActive = !isActive;