var result = 12 - 6 / 3
var result2 = (3 + 4) *2 

let isGreater = 20 - 6 * 3 >= 4
let isGreater2 = 20 - 6 * 3 >= 1

console.log(' 12 - 6 / 3', result)
console.log(' (3 + 4) *2 ', result2)

console.log(' 20 - 6 * 3 >= 4', isGreater)
console.log(' 20 - 6 * 3 >= 1', isGreater2)

// =, +, -, /, >=, <= (Операторы)



// %- получение остатка
console.log('5 % 2', 5 % 2)
console.log('8 % 3', 8 % 3)

let i = 1
//i = i + 1
// ++, -- -Инкрименты 
i++
console.log('i', i)

i = i - 1
console.log('i', i)

//i = i + 3
i += 3
console.log('i', i)

//++i - префексная - результат видно сразу 
//i++ - постфиксная - результат скрыт 

//сравнение 
console.log('5 > 3', 5 > 3)
console.log('3 < 2', 3 < 2)

console.log('8 >= 7', 8 >= 7)
console.log('12 <= 12', 12 <= 12)
console.log('12 < 12', 12 < 12)

console.log('4 == 4', 4 == 4)
console.log('4 == 5', 4 == 5)

console.log('4 != 4', 4 != 4)
console.log('4 != 5', 4 != 5)

console.log('4 === 4', 4 === '4')
console.log('4 === 4', 4 == '4')


//&& (и)
// || (или)
// ! (не)

console.log(true && true)
console.log(true && false) // || всегда false кроме true true 


console.log(true || true) 
console.log(true || false) // || всегда true кроме false false 


console.log((false && true) || ( true || false) || !true)

let carName = 'Ford'
let carYear = 2008
let currentYear = 2018
let carAge = currentYear - carYear

//если возраст машины < 5 лет
//если возраст машины >= 5 лет и <= 10 
// другое сообщение 

if (carAge < 5) {
    console.log(carName + ' старше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
} else {
    console.log('Возраст ' + carName + ' равняется')
}


// 0, null, undefined,NaN, ' '  - false 
// 


if (4) {
    console.log('Значение true')
} else {
    console.log('Значение false')
}

//тернарные операторы 
4 ? console.log('Значение true') : console.log('Значение false')


let personAge = 20 

/*
if (personAge < 18) {
    message = 'Человек еще не совершеннолетний  '

} else {
    message = 'человек совершеннолетний '
}

console.log(message)
*/
let message = personAge < 18 
? 'Человек еще не совершеннолетний  ' 
: 'Человек совершеннолетний  '