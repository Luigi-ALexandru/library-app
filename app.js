const content = document.querySelector(".content");
const bookName = document.querySelector("#bookName").value;
const authorName = document.querySelector("#authorName").value;
const readStatus = document.querySelector("#readStatus").value;

let myLibrary = [1, 2 , 3, 4];

const Book = function(name, author, read) {
    this.name = name
    this.author = author
    this.read = read
}

function addBookToLibrary() {
    //const book = new Book("The Hobbit", "JRR Tolkien", "Read/Not Read");
    const book = new Book(bookName, authorName, readStatus);
    myLibrary.push(book);
}

Book.prototype.sayName = function() {
    return this.name;
}

Book.prototype.sayAuthor = function() {
    return this.author;
}

Book.prototype.sayRead = function() {
    return this.read;
}

function call() {
    for(let i = 0; i < myLibrary.length; i++) {
        const x = document.createElement('div');
        x.classList.add(`book-item${i}`);
        x.textContent = x.textContent + myLibrary[i];
        content.appendChild(x);
    }
}

call();

const addBtn = document.querySelector(".b1");
addBtn.addEventListener("click", function() {
    addBookToLibrary();
    call();
})
