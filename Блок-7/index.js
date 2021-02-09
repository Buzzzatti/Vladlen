const form = document.querySelector('form')

form.addEventListener('submit', event => {

    event.preventDefault()

    const title = form.title.value
    const text = form.text.value
    const description = form.description.value

    //console.log(title, text, description)    

    saveForm({title, text, description})

})


function saveForm(data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data
    }
    console.log('Form data: ', formData)
}