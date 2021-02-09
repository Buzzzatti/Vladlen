// 6th lesson
let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

function buttonHandler () {
    console.log('clicked!')
    h1.textContent = input.value
}

h1.addEventListener('mouseenter', function() {
    this.style.color = 'red'
    this.style.backgroundColor = 'black'
})
h1.addEventListener('mouseleave', function() {
    this.style.color = 'yellow'
    this.style.backgroundColor = 'green'
})
button.addEventListener('click', buttonHandler)
_______________________________________________
// 7th lesson
let divs = document.querySelectorAll('div')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
        console.log(this.getAttribute('id'))
    })
}


let divs = document.querySelectorAll('div')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
        console.log(this.getAttribute('id'))
    }, true)
}
_________________________________________________
// 8th lesson
let divs = document.querySelectorAll('div')
let link = document.querySelector('a')



for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation() //кливаем отдельно на каждый слой 
        console.log(this.getAttribute('id'))
    })
}

link.addEventListener('click', handLinkClick)
function handLinkClick (event) {
    event.preventDefault()

    let div = divs[0]

    if (div.style.display === 'none') {
        div.style = 'flex'
    } else {
        div.style.display = 'none'
    }
    /*_________________________________________________
    | div.style.display = div.style.display === 'none'|
    | ? 'flex'________________________________________|
    | : 'none'|
    | ________|*/


    console.log(div.style.display)
}

