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
  console.log('Book added!')
}

Book.prototype.info = function() {
  status = this.getReadStatus();
  console.log(this.title);
  console.log(`${this.title} by ${this.author}, ${this.pages} pages. ${status} `);
  alert(`${this.title} by ${this.author}, ${this.pages} pages. ${status} `); // temp
};

Book.prototype.getReadStatus = function() {
  if (['yes', 'y', 'read', 'si'].includes(this.read.toLowerCase())) {
    return 'Has been read.';
  }
  else {
    return 'Has not yet been read.';
  }
};

addBookToLibrary();
myLibrary[myLibrary.length -1].info();