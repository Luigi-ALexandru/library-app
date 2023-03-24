const content = document.querySelector(".book");
const content2 = document.querySelector(".author");
const content3 = document.querySelector(".readStatus");
const deleteButton = document.querySelector(".delete-btn");

let myLibrary = [];

const Book = function(name, author, read) {
    this.name = name
    this.author = author
    this.read = read
}

function addBookToLibrary() {
    const bookName = document.querySelector("#bookName").value;
    const authorName = document.querySelector("#authorName").value;
    const readStatus = document.querySelector("#readStatus").value;
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
    content.textContent = "";
    content2.textContent = "";
    content3.textContent = "";
    deleteButton.textContent = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let position = i;
        const x = document.createElement('div');
        x.classList.add(`book-item${i}`);
        const k = document.createElement('div');
        k.classList.add(`book-item${i}`);
        const p = document.createElement('div');
        p.classList.add(`book-item${i}`);
        //========================Buttons==================
        const button1 = document.createElement('button');
        button1.classList.add(`button-item${i}`);
        button1.textContent = "Delete";
        deleteButton.setAttribute("style", "display: flex; flex-direction: column;")
        button1.addEventListener("click", function() {
            let myButtonD = `button-item${i}`;
            let bD = deleteButton.querySelector('.' + myButtonD);
            myLibrary.splice(position,1);
            let bookItemClass = `book-item${position}`;
            let bookElement = content.querySelector('.' + bookItemClass);
            let authorElement = content2.querySelector('.' + bookItemClass);
            let readStatusElement = content3.querySelector('.' + bookItemClass);
            content.removeChild(bookElement);
            content2.removeChild(authorElement);
            content3.removeChild(readStatusElement);
            deleteButton.removeChild(bD);
            call();
        })
        //=========BR=================
        const breakLine = document.createElement('br')
        const breakLine2 = document.createElement('br')
        const breakLine3 = document.createElement('br')
        const breakLine4 = document.createElement('br')
        //===========================================
        let y = myLibrary[i];
        let n = y.sayName();
        let a = y.sayAuthor();
        let r = y.sayRead();
        x.textContent += n;
        k.textContent += a;
        p.textContent += r;
        deleteButton.appendChild(button1);
        content.appendChild(x);
        content2.appendChild(k);
        content3.appendChild(p);
        deleteButton.appendChild(breakLine);
        content.appendChild(breakLine2);
        content2.appendChild(breakLine3);
        content3.appendChild(breakLine4);
    }
}

const addBtn = document.querySelector(".b1");
addBtn.addEventListener("click", function() {
    addBookToLibrary();
    call();
})