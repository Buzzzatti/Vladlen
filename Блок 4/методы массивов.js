document.querySelector('#alert').addEventListener('click', function(){
    alert('вы успешно кликнули ')
})

document.querySelector('#confirm').addEventListener('click', function(){
    var decision = confirm('Хули надо ?')

    if(decision) {
        alert('вы успешно кликнули ')
    }
})

document.querySelector('#prompt').addEventListener('click', function(){
    var risk = prompt('уебать ?')

    if(risk >= 18) {
        alert('тупой?')
    }else{
        alert('пиздуй')
    }
})

console.log('console.log')
console.warn('console.warn')
console.info('console.info')
console.error('console.error')

// throw new Error('error')//стопит код 

// методы массивов 

var str = '1,2,3,4,5,6,7,8'

var array = str.split(',') //убирает разделители
// console.log(array)
//console.log(array.join(';'))// добавляет разделители 

//console.log(array.reverse()) //обратное написание 

//array.splice(0, 0, '11') 

var newArray = array.concat()//суммирует два массива 

// console.log(newArray)

var objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 28}
]

var person = objArr.find(function(person) {

})


console.log(objArr)