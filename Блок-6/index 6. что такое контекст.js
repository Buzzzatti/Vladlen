/*let person = {
    name: "max",
    age: 25,
    job: "Frontend",
    displayInfo: function() {
        console.log('Name: ', this.name)
        console.log('Job: ', this.job)
        console.log('Age: ', this.age)
    }
}

person.displayInfo()*/
//вывели параметры объекта с их данными 

/*let person = {
    name: "max",
    age: 25,
    job: "Frontend",
    displayInfo: function(ms){
        let self = this
        setTimeout(function() {
        console.log('Name: ', self.name)
        console.log('Job: ', self.job)
        console.log('Age: ', self.age)
    },ms)}
}

person.displayInfo(5000)*/ //старый способ 


let person = {
    name: "max",
    age: 25,
    job: "Frontend",
    displayInfo: function(ms) {

        setTimeout(function() {
        console.log('Name: ', this.name)
        console.log('Job: ', this.job)
        console.log('Age: ', this.age)
    }.bind(this),ms)
}
}

person.displayInfo(5000)
//современный способ
