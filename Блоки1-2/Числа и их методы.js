console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3)

console.log(0xAB) - //16ричная система исчисления 
console.log(2e3) 

console.log(NaN) - //число
console.log(typeof NaN) 

console.log(123 / 0) 

//Методы
let fortyTwo = 42
console.log(fortyTwo.toString()) //перевод числа в строку 

let delta = 8 / 3
console.log(+delta.toFixed(2)) // сколько знаков после запятой оствить, при добавлении + сохраняется тип число
console.log(parseFloat(delta.toFixed(2))) // сколько знаков после запятой оствить 
console.log(parseInt(delta.toFixed(2))) // парсит число к целому чмслу 


console.log(isNaN(NaN)) //проверка числа 
console.log(isNaN(42))

console.log(isFinite(1 / 0))
console.log(isFinite(999999))