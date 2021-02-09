let person = {//объект
    name: 'sasha',//ключ 
    year: 1990,
    family:['Olga', 'Sergey'],
    car: {
        year: 2010,
        model: 'Ford'
    },
    calculateAge: function() {
        let age = 2020 - this.year
        console.log('Возраст',age)
    }
}

console.log(person)
console.log(person.name)
console.log(person['year'])


let field = 'car'
console.log(person[field].year)

person.calculateAge()