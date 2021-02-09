let person = {
    name: "Max",
    age: 28,
    job: "Frontend"
}

for (let key in person) {
    if (person.hasOwnProperty(key)){ // hasOwnProperty- наличие прототипа 
        console.log(person[key])
    }
}

/*
for (let key in person) {
    console.log(person[key])   вывод кзначения ключей объекта (key)-просто ключи
}
*/

let keys = Object.keys(person) 
console.log(keys)
//вывод ключей в массиве 

Object.keys(person).forEach(function(key){
    console.log(person[key])
})
//выводит значения ключей ТОЛЬКО ОБЪЕКТА БЕЗ ПРОТОТИПА

