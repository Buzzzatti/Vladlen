/*function getAge(year) {
    const current = new Date().getFullYear()     // классика
    return current - year
}

console.log(getAge(1998)) */

/*const calculateAge = (year) => {
    const current = new Date().getFullYear()    //стрелка
    return current - year
} 
console.log(calculateAge(1998))*/

/*const getAge = year => {
    const current = new Date().getFullYear()     // стрелка без входной
    return current - year
}

console.log(getAge(1998))*/

/*const getAge = year => {
    return new Date().getFullYear() - year      // стрелки без return 
}
console.log(getAge(1998))*/

/*const getAge = year => new Date().getFullYear() - year

const logAge = year => console.log(new Date().getFullYear() - year)

logAge(1998)

console.log(getAge(1998)) */

const person = {
    age: 23,
    name: "Max",
    logNameWithTimeOut() {
        window.setTimeout(() => {
            console.log(this.name)
        },1000)
    }
}

