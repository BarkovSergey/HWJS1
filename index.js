/*Сложение*/

function sum(num1,num2){
    const result = num1 + num2;
    return result;
}

const sumFunction = function (num1,num2){
    const result = num1 + num2;
    return result;
}

const sumArrow = (num1,num2) => {
    const result = num1 + num2;
    return result;
}
/*Вычитание*/

function sub(num1,num2){
    const result = num1 - num2;
    return result;
}

const subFunction = function (num1,num2){
    const result = num1 - num2;
    return result;
}

const subArrow = (num1,num2) => {
    const result = num1 - num2;
    return result;
}
/*Умножение*/

function mult(num1,num2){
    const result = num1 * num2;
    return result;
}

const multFunction = function (num1,num2){
    const result = num1 * num2;
    return result;
}

const multArrow = (num1,num2) => {
    const result = num1 * num2;
    return result;
}
/*Деление*/

function div(num1,num2){
    const result = num1 / num2;
    return result;
}

const divFunction = function (num1,num2){
    const result = num1 / num2;
    return result;
}

const divArrow = (num1,num2) => {
    const result = num1 / num2;
    return result;
}

/*Деление с остатком*/

function divRem(num1,num2){
    const result = num1 % num2;
    return result;
}

const divRemFunction = function (num1,num2){
    const result = num1 % num2;
    return result;
}

const divRemArrow = (num1,num2) => {
    const result = num1 % num2;
    return result;
}

/*Больше*/

function more(num1,num2){
    const result = num1 > num2;
    return result;
}

const moreFunction = function (num1,num2){
    const result = num1 > num2;
    return result;
}

const moreArrow = (num1,num2) => {
    const result = num1 > num2;
    return result;
}

/*Меньше*/

function less(num1,num2){
    const result = num1 < num2;
    return result;
}

const lessFunction = function (num1,num2){
    const result = num1 < num2;
    return result;
}

const lessArrow = (num1,num2) => {
    const result = num1 < num2;
    return result;
}

/*Больше или равно*/

function moreEq(num1,num2){
    const result = num1 >= num2;
    return result;
}

const moreEqFunction = function (num1,num2){
    const result = num1 >= num2;
    return result;
}

const moreEqArrow = (num1,num2) => {
    const result = num1 >= num2;
    return result;
}

/*Меньше или равно*/

function lessEq(num1,num2){
    const result = num1 <= num2;
    return result;
}

const lessEqFunction = function (num1,num2){
    const result = num1 <= num2;
    return result;
}

const lessEqArrow = (num1,num2) => {
    const result = num1 <= num2;
    return result;
}

/*Равно*/

function Eq(num1,num2){
    const result = num1 === num2;
    return result;
}

const EqFunction = function (num1,num2){
    const result = num1 === num2;
    return result;
}

const EqArrow = (num1,num2) => {
    const result = num1 === num2;
    return result;
}

/*Не равно*/

function nEq(num1,num2){
    const result = num1 !== num2;
    return result;
}

const nEqFunction = function (num1,num2){
    const result = num1 !== num2;
    return result;
}

const nEqArrow = (num1,num2) => {
    const result = num1 !== num2;
    return result;
}


console.log('Сложение:')
console.log(sum(2,2));
console.log('Вычитание:')
console.log(subFunction(5,3));
console.log('Умножение:')
console.log(multArrow(3,4));
console.log('Деление:')
console.log(divArrow(6,2));
console.log('Деление с остатком:')
console.log(divRemFunction(5,3));
console.log('Больше:')
console.log(more(32,22));
console.log('Меньше:')
console.log(less(5,2));
console.log('Больше либо равно:')
console.log(moreEqArrow(2,11));
console.log('Меньше либо равно:')
console.log(lessEq(8,2));
console.log('Равно:')
console.log(EqArrow(7,7));
console.log('Не равно:')
console.log(nEqArrow(2,32));