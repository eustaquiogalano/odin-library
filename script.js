const addBookButton = document.querySelector("#add-book");
const addBookModal = document.querySelector("#add-book-modal");

const myLibrary = [];  // our main storage for library

function Book(title, author, numberOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    
}

addBookButton.addEventListener('click', () => {
    addBookModal.showModal();
});

