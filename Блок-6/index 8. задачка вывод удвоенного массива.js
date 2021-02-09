let a = [1,2,3]
let b = [5, 'Hello', 6]

Array.prototype.double = function() {
    let newArray = this.map(function(item) {
        if (typeof item === 'number') {
            return item *= item // или Math.pow(item, 2)
        } else {
            return item + item
        }
        // return item
    })

    return newArray
}

let newA = a.double()
let newB = b.double()

console.log('A', newA)
console.log('B', newB)