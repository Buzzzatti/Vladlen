__________________________________________________
//1-2 уроки - атрибуты 
let div = document.getElementById('playground')
console.log(div)

let p = document.getElementsByClassName('text')
console.log(p)

let h1 = document.getElementsByTagName('h1')
console.log(h1)

let div = document.querySelector('#playground')
console.log(div)
 //class -> .CLASS_NAME, id -> #ID, tag -> TAG_NAME
let p = document.querySelectorAll('.text')
console.log(p)

let h1 = document.querySelector('h1')
console.log(h1)

let ul = document.querySelector('div#playground > div > ul')
console.log(ul)
__________________________________________________
//ДОБАВЛЯЕМ СТИЛИ, ВСТАВЛЯЕМ ТЕКСТ, МЕНЯЕМ СОДЕРЖИМОЕ HTML 3 урок
let div = document.getElementById('playground')

div.innerHTML = '<h2 style="color: red;">From JavsScript</h2>'
console.log(div.innerHTML)


let h1 = document.querySelector('h1')
h1.textContent = 'Changed from JS'
console.log(h1.textContent)

let input = document.querySelector('input')
console.log(input.value)
__________________________________________________
//АТРИБУТЫ 4 урок

let a = document.querySelector('a')
let oldHref = a.getAttribute('href')
console.log(a.getAttribute('title')) //getAttribute - получение содержимого html атрибута



let a = document.querySelector('a')
let oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://ya.ru') // сменили содержимое атрибута 
a.textContent = 'yandex'// Сменили контент 
console.log(a.attributes)
__________________________________________________
// CLASSES 5th lesson
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

box1.classList.add('red') // ДОБАВИЛИ КЛАСС 
box2.classList.remove('blue') // ПЕРЕДВИНУЛИ ЦВЕТ
let hasClass = box2.classList.contains('blue')

console.log(hasClass)

if (hasClass) {
    box2.classList.remove('blue')
} else {
    box2.classList.add('blue')
}

