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

    // push / add the new book to the array
    myLibrary.push(newBook);
    // log for verification
    console.log( myLibrary );
    
}

function clearInputFields() {
    title.value = "";
    author.value = "";
    pages.value = "";
}

addBookButton.addEventListener('click', () => {
    addBookModal.showModal();
});

addToListButton.addEventListener("click", () => {

    // use the book title as the variable name for the object
    let bookTitle = title.value;  
    bookTitle = new Book(bookTitle, author.value, pages.value);
    
    // push / add the new book object to the library
    addBookToLibrary(bookTitle);  

    // clears the input fields for next entry
    clearInputFields();    

});

