//Замыкания
let createCounter = function (CounterName) {
    let counter = 0

    /*return function() {
        console.log(CounterName, ++counter)
    }*/

    return {
        increment: function() {
            counter++
        },
        decrement: function(){
            counter--
        },
        getCounter: function(){
            return counter
        }
    }
}

let counterA = createCounter('CounterA')
let counterB = createCounter('CounterB')

counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()