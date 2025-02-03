const addBookButton = document.querySelector("#add-book");
const addBookModal = document.querySelector("#add-book-modal");
const addToListButton = document.querySelector("#add-to-list");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

const myLibrary = [];  // our main storage for library

function Book(title, author, numberOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log( myLibrary );
    
}

addBookButton.addEventListener('click', () => {
    addBookModal.showModal();
});

addToListButton.addEventListener("click", () => {
    console.log(title.value, author.value, pages.value , "here");

    let bookTitle = title.value;
    bookTitle = new Book(bookTitle, author.value, pages.value);
    
    addBookToLibrary(bookTitle);
    title.value = "";
    author.value = "";
    pages.value = "";
});

