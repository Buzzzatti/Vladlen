// let p = document.querySelectorAll('p')

// for (i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function(event){
//     event.target.style.color = 'blue'
//     })
// }

function (wrap) {
    document.getElementsById('wrapper').addEventListener('click', function(event) {
        console.log(event.target)
        
    })
}
