let cars = ['Ford', 'Mazda', 'Kia', 'BMW']

console.log(cars)
console.log(cars[1]) //вывод конкретного эллемента массива

console.log(cars.length) //колличество эллементов 

cars.push('Audi') //добавит в массив новый элемент в конец

cars.pop() // удаляет последний элемент 

let audi  = cars.pop() //добавляет элемент 
console.log(cars, audi)


// удвляет и возвращает 1 элемент
let ford = cars.shift(
console.log(cars, audi)
)

//добавляеи элемент в начало 
cars.unshift(audi)
console.log(cars)

console.log(cars.indexOf('Kia')) //поиск в массиве 
