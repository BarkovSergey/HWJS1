/*Сложение*/

function sum(num1,num2){
    return num1 + num2;
}

const sumFunction = function (num1,num2){
    return  num1 + num2;
}

const sumArrow = (num1,num2) => num1 + num2;

/*Вычитание*/

function sub(num1,num2){
    const result = num1 - num2;
}

const subFunction = function (num1,num2){
    return num1 - num2;
   }

const subArrow = (num1,num2) => num1 - num2;

/*Умножение*/

function multi(num1,num2){
    return num1 * num2;
}

const multiFunction = function (num1,num2){
    return num1 * num2;
}

const multiArrow = (num1,num2) => num1 * num2;

/*Деление*/

function div(num1,num2){
    return num1 / num2;
}

const divFunction = function (num1,num2){
    return num1 / num2;
}

const divArrow = (num1,num2) => num1 / num2;

/*Деление с остатком*/

function divRem(num1,num2){
    return num1 % num2;
}

const divRemFunction = function (num1,num2){
    return num1 % num2;
}

const divRemArrow = (num1,num2) => num1 % num2;

/*Больше*/

function more(num1,num2){
    return num1 > num2;
}

const moreFunction = function (num1,num2){
    return num1 > num2;
}

const moreArrow = (num1,num2) => num1 > num2;

/*Меньше*/

function less(num1,num2){
    return num1 < num2;
}

const lessFunction = function (num1,num2){
    return num1 < num2;
}

const lessArrow = (num1,num2) => num1 < num2;

/*Больше или равно*/

function moreEq(num1,num2){
    return num1 >= num2;
}

const moreEqFunction = function (num1,num2){
    return num1 >= num2;
}

const moreEqArrow = (num1,num2) => num1 >= num2;

/*Меньше или равно*/

function lessEq(num1,num2){
    return num1 <= num2;
}

const lessEqFunction = function (num1,num2){
    return num1 <= num2;
}

const lessEqArrow = (num1,num2) => num1 <= num2;

/*Равно*/

function Eq(num1,num2){
    return num1 === num2;
}

const EqFunction = function (num1,num2){
    return num1 === num2;
}

const EqArrow = (num1,num2) => num1 === num2;

/*Не равно*/

function nEq(num1,num2){
    return num1 !== num2;
}

const nEqFunction = function (num1,num2){
    return num1 !== num2;
}

const nEqArrow = (num1,num2) => num1 !== num2;

console.log('Сложение:',sum(2,2));
console.log('Вычитание:',subFunction(5,3));
console.log('Умножение:',multiArrow(3,4));
console.log('Деление:',divArrow(6,2));
console.log('Деление с остатком:',divRemFunction(5,3));
console.log('Больше:',more(32,22));
console.log('Меньше:',less(5,2));
console.log('Больше либо равно:',moreEqArrow(2,11));
console.log('Меньше либо равно:',lessEq(8,2));
console.log('Равно:',EqArrow(7,7));
console.log('Не равно:',nEqArrow(2,32));
