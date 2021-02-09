let str1 = 'Hello world!'


let personName = 'Victor'

let message = 'Человека зовут "' + personName + '"'
let message2 = "Человека зовут '" + personName + "'"
let message3 = 'Человека зовут \'' + personName + '\''

console.log(message3)

let newMessage = 'Hello World !'

// МЕТОДЫ
console.log(newMessage.length)
console.log(newMessage.toUpperCase()) //все буквы заглавные
console.log(newMessage.toLowerCase()) //все буквы строчные
console.log(newMessage.charAt(1))     //узнать что находится на 1 позиции
console.log(newMessage.indexOf('World')) // Поиск по слову 
console.log(newMessage.indexOf('Cat'))
console.log(newMessage.substr(1, 4)) // забирает часть строки(подстроки) 
console.log(newMessage.substr(newMessage.indexOf('world'), 5))  
console.log(newMessage.substring(1, 3)) //забираем фрагмент строки с значения