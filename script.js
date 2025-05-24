const addBookButton = document.querySelector("#add-book");
const addBookModal = document.querySelector("#add-book-modal");
const addToListButton = document.querySelector("#add-to-list");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const bookList = document.querySelector("#book-section");
const inputsToCheckValue = document.querySelectorAll(".check-value");

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
]; // our main storage for library

class Book {
  constructor(title, author, numberOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = numberOfPages;
    this.isRead = isRead;
  }

  static renderBookList() {
    let generatedHTML = "";

    // loop over the array
    myLibrary.forEach((book, index) => {
      // Get the book title and remove whitespaces
      // to use as id name for each books input and label elements
      let idName = book.title.split(" ").join("");

      // This will generate a container for each book
      // including all the elements and attributes needed
      generatedHTML += `
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
    this.deleteBook();
  }

  static deleteBook() {
    // gather all the current delete button
    const deleteBookButton = document.querySelectorAll(".delete-button");

    // loop over the node list of delete button
    deleteBookButton.forEach((button) => {
      // put an event listener to every delete button
      button.addEventListener("click", (e) => {
        // get the ID of the clicked element
        // convert to number to be able to use as an index number
        let bookIndex = +e.target.id;

        // remove the selected element by referencing
        // its index number
        myLibrary.splice(bookIndex, 1);

        // render the array
        this.renderBookList();
      });
    });
  }

  static addBookToLibrary(newBookObject) {
    // push / add the new book to the array
    myLibrary.push(newBookObject);
    // log for verification
    console.log(myLibrary);
  }
}

function clearInputFields() {
  title.value = "";
  author.value = "";
  pages.value = "";
}

function validateInputFields(e) {
  title.setCustomValidity("");
  author.setCustomValidity("");
  pages.setCustomValidity("");

  if (title.validity.valueMissing) {
    title.setCustomValidity("Hindi maipasok 'pag walang laman");
    title.reportValidity();
  }

  if (pages.validity.valueMissing) {
    pages.setCustomValidity("Hindi maipasok 'pag walang laman");
    pages.reportValidity();
  }

  if (author.validity.valueMissing) {
    author.setCustomValidity("Hindi maipasok 'pag walang laman");
    author.reportValidity();
  }

  if (
    title.validity.valueMissing ||
    author.validity.valueMissing ||
    pages.validity.valueMissing
  ) {
    e.preventDefault();
  } else {
    // push / add the new book object to the library
    Book.addBookToLibrary(new Book(title.value, author.value, pages.value));
    clearInputFields();
    Book.renderBookList();
  }
}

addBookButton.addEventListener("click", () => {
  addBookModal.showModal();
});

addToListButton.addEventListener("click", (e) => {
  // Validate first the input value
  // before proceeding
  validateInputFields(e);
});

inputsToCheckValue.forEach((element) => {
  // For each input element, attach an input event
  element.addEventListener("input", () => {
    // Always reset the custom mesage
    // every time event triggers
    element.setCustomValidity("");

    // Check for validity of value missing
    if (element.validity.valueMissing) {
      // set this custom message if invalid
      element.setCustomValidity("Bawal ang walang laman");
    }

    // report to user the custome message
    element.reportValidity();
  });
});

// initial render of books in the array
Book.renderBookList();
