const bookList = document.querySelector('.booklist');
const newBookButton = document.querySelector('.buttons');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

// take user's input and add the new book to the myLibrary array
let addBookToLibrary = () => {
  let title = prompt('What is the name of the book?', 'Moby Dick');
  let author = prompt('Who is the author?');
  let pages = prompt('How many pages?');
  let read = prompt('Have you read it? y/n:', 'y')
  myLibrary.push(new Book(title, author, pages, read));
  alert('Book added!');
  displayLibrary(myLibrary.slice(myLibrary.length -1));
}

const displayLibrary = (library) => {
  library.forEach((book, index) => {
    nextBook = document.createElement('LI'); //type of element
    nextBook.innerHTML = book.info(); //works in backticks
    //bookList.appendChild(document.createElement('LI')); //type of element
    bookList.appendChild(nextBook);
    deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Remove';
    deleteButton.className = 'delete-button';
    deleteButton.dataset.index = index;
    bookList.appendChild(deleteButton);
    }
  ); //temp
  addDeleteButtonEvents();
} 

const addDeleteButtonEvents = () => {
  deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => button.addEventListener('click', deleteBook));
}

function deleteBook() {  // can be arrow function?
  indexToDelete = event.target.dataset.index
  // remove from Lib array
  myLibrary.splice(indexToDelete, 1)
  // remove node and corresponding delete button
  let oldButton = document.querySelector(`[data-index="${indexToDelete}"]`);  //need the quotes around the index value!
  let oldBook = document.querySelectorAll('li')[indexToDelete]
  oldButton.remove();
  oldBook.remove();
  refreshButtonIndices();
}

let refreshButtonIndices = () => {
  deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach((button,index) => {
    button.dataset.index = index;
  })
};

Book.prototype.info = function() {
  status = this.getReadStatus();
  console.log(this.title);
  // console.log(`${this.title} by ${this.author}, ${this.pages} pages. ${status} `);
  // alert(`${this.title} by ${this.author}, ${this.pages} pages. ${status} `); // temp
  return `${this.title} by ${this.author}, ${this.pages} pages. ${status}`;
};

Book.prototype.getReadStatus = function() {
  if (['yes', 'y', 'read', 'si'].includes(this.read.toLowerCase())) {
    return 'Has been read.';
  }
  else {
    return 'Has not yet been read.';
  }
};

newBookButton.addEventListener('click', addBookToLibrary);
myLibrary.push(new Book('HP: Deathly Hallows', 'JK', 760, 'y'));
myLibrary.push(new Book('A Season with Verona', 'Guy', 303, 'y'));
myLibrary.push(new Book('The Hobbit', 'Tolkien', 403, 'no'));

displayLibrary(myLibrary);