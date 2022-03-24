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
    if (num1 > num2) {
        return num1;
    } else {
        console.log('Ошибка');
    }
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
    if (num1 < num2) {
        return num1;
    } else {
        console.log('Ошибка');
    }
}
/*Больше или равно*/
/*Меньше или равно*/
/*Равно*/
/*Не равно*/


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
console.log(lessArrow(1,2));