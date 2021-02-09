const createPost = (title, text, date = new Date().toLocaleDateString()) => {
    return {
        title: title,
        text: text,
        date: date
    }
}

const post = createPost('Скоро новый год', 'Скоро Нет')

console.log(post)