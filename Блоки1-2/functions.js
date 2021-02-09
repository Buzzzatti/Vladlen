let carName = 'Ford'
let carYear = 2010
let personYear = 1990
let age = 20


function calculateAge(year) {
    let currentYear = 2018
    var result = currentYear - year 
    return result

}

function checkAngLockAge(year, name) {
    if (calculateAge(year) < age) {
        console.log('Возраст ' + name + ' меньше ' + age + ' лет')
    } else { 
        console.log('Возраст ' + name + ' больше' + age + 'лет ')
    }
}

checkAngLockAge(carYear, 'Машины')
checkAngLockAge(personYear, 'человека')

// let priceSale = 2000
// let sizeSale = 200 

// function saleSize(sale) {
//     let halfPrice = (priceSale - sizeSale) / 2
//     console.log(halfPrice)
// } 

// saleSize(halfPrice)