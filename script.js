function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

Book.prototype.info = function() {
  status = this.getReadStatus();
  console.log(this.title);
  console.log(`${this.title} by ${this.author}, ${this.pages} pages. ${status} `);
};

Book.prototype.getReadStatus = function() {
  if (['yes', 'y', 'read', 'si'].includes(this.read.toLowerCase())) {
    return 'Has been read.';
  }
  else {
    return 'Has not yet been read.';
  }
};