const addBookButton = document.querySelector("#add-book");
const addBookModal = document.querySelector("#add-book-modal");
const addToListButton = document.querySelector("#add-to-list");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const bookList = document.querySelector("#book-section");

const myLibrary = [
    {
        title: "Walter's Life",
        author: "Walter Simeon",
        pages: "129",
    },
    {
        title: "The Life of Lions",
        author: "Kuya Kim",
        pages: "1578",
    },
    
];  // our main storage for library

function Book(title, author, numberOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = numberOfPages;
    this.isRead = isRead;
}

function addBookToLibrary(newBookObject) {

    // push / add the new book to the array
    myLibrary.push(newBookObject);
    // log for verification
    console.log( myLibrary );
    
}

function clearInputFields() {
    title.value = "";
    author.value = "";
    pages.value = "";
}

function renderBookList() {
    let generatedHTML = "";
    
    // loop over the array
    myLibrary.forEach((book, index) => {

        // Get the book title and remove whitespaces
        // to use as id name for each books input and label elements  
        let idName = book.title.split(" ").join("");

        // This will generate a container for each book
        // including all the elements and attributes needed 
        generatedHTML += 
            `
            <div class="book-list-container">
                <div class="book-container">
                    <h3>${book.title}</h3>
                    <p>
                        ${book.author} 
                        <br>
                        ${book.pages} pages
                    </p>
                </div>
                <div class="read-toggle-container">
                    <div id="toggle">
                        <input type="checkbox" id="${idName}">
                        <label for="${idName}" class="js-manipulation"></label>
                    </div>
                </div>
                <div class="del">
                    <button class="delete-button" id="${index}">Delete</button>
                </div>
            </div>
            `;
    });

    // The generated containers will be the content 
    // of the book list section 
    bookList.innerHTML = generatedHTML;

    // this function will put an event listener 
    // to every delete button of every book container
    deleteBook();
}

function deleteBook() {
    // gather all the current delete button 
    const deleteBookButton = document.querySelectorAll(".delete-button"); 

    // loop over the node list of delete button
    deleteBookButton.forEach(button => {

        // put an event listener to every delete button
        button.addEventListener("click", (e) => {

            // get the ID of the clicked element
            // convert to number to be able to use as an index number
            let bookIndex = +e.target.id;       

            // remove the selected element by referencing
            // its index number
            myLibrary.splice(bookIndex, 1);

            // render the array
            renderBookList();
        });
    })
}

addBookButton.addEventListener('click', () => {
    addBookModal.showModal();
});

addToListButton.addEventListener("click", () => {
    // push / add the new book object to the library
    addBookToLibrary( new Book(title.value, author.value, pages.value) );  
    clearInputFields();   
    renderBookList();
});

// initial render of books in the array
renderBookList();