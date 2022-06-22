class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }

    addBook (bookName, bookAuthor) {
        if(this.books.length >= this.capacity){
            throw new Error("Not enough space in the collection.")
        }

        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        })

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook( bookName ) {
        let book = this.books.find(b => b.bookName == bookName)

        if(book == undefined){
            throw new Error(`${bookName} is not in the collection.`)
        }
        if(book.payed == true){
            throw new Error(`${bookName} has already been paid.`)
        }
        
        this.books.find(b => b.bookName == bookName).payed = true
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let book = this.books.find(b => b.bookName == bookName)

        if(book == undefined){
            throw new Error("The book, you're looking for, is not found.")
        }

        if(book.payed == false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books.filter(b => b != book)
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let result = []
        if(bookAuthor == undefined) {
            let emptySpots = 0
            for(let book of this.books) {
                if (book.payed == false) {
                    emptySpots += 1
                }
            }
            let firstLine = [`The book collection has ${emptySpots} empty spots left.`]
            result.push(firstLine)
            this.books.sort((a, b) => a.bookName.localeCompare(b))
            let secondLine = this.books.map(book => [`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`]).join('\n')
            result.push(secondLine)
        }else{
            let book = this.books.find(b => b.bookAuthor == bookAuthor)
            if(book == undefined){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }

            result.push([`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`])
        }
        return result.join('\n')
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());







