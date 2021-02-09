function printObject(objName) {
    console.log('Printing object ', objName)
    for(let key in this) {
        if(this.hasOwnProperty(key)) {
            console.log('[' + key + ']', this[key])
        }
    }
}



let person = {
    firstName: "max",
    job: "Backend",
    age: 29,
    friends: ['Elena', 'Igor']
}

let car = {
    name: "Ford",
    model: "Focus",
    year: 2017
}

let printPerson = printObject.bind(person)
printPerson('person')

printObject.call(car,'Car')

printObject.apply(person, ['Person'])