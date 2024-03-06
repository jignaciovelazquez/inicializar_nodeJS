// Nueva forma de exportar

export const getTitle = () => "curso de NodeJS"

export const getAuthor = (author) => `El autor del curso es ${author}`


/* Anterior forma de exportar

const getTitle = () => "curso de NodeJS"

const getAuthor = (author) => `El autor del curso es ${author}`

module.exports = {
    getTitle,
    getAuthor
}

*/