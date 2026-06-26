// Constructor Functions

function CreateBook(bookName, authorName, pages) {
  this.bookName = bookName;
  this.authorName = authorName;
  this.pages = pages;
  this.getFrontPage = function () {
    console.log('Book Name —', this.bookName);
    console.log('Author Name —', this.authorName);
    console.log('Pages —', this.pages);
  };
};

let book1 = new CreateBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);
let book2 = new CreateBook('To Kill a Mockingbird', 'Harper Lee', 281);
let book3 = new CreateBook('1984', 'George Orwell', 328);
let book4 = new CreateBook('Pride and Prejudice', 'Jane Austen', 279);
let book5 = new CreateBook('The Catcher in the Rye', 'J.D. Salinger', 214);

book1.getFrontPage();

// After ES6, we can use class syntax to create constructor functions in a more elegant way.

class CreateKitab {
  constructor(bookName, authorName, pages) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.pages = pages;
  }
  getFrontPage() {
    console.log('Book Name —', this.bookName);
    console.log('Author Name —', this.authorName);
    console.log('Pages —', this.pages);
  }
};

let book6 = new CreateKitab('The Hobbit', 'J.R.R. Tolkien', 310);
book6.getFrontPage();

// Classical Inheritance

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  };
  greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  };
};

class Admin extends User {
  constructor(firstName, lastName, email, adminAccess) {
    super(firstName, lastName, email);
    this.adminAccess = adminAccess;
  };
  addCourse() {
    console.log('New course added');
  };
  removeAllCourses() {
    console.log('All courses removed');
  };
  greet() {
    console.log(`Hello, Admin ${this.firstName} ${this.lastName}!`);
  };
};

var u1 = new User('John', 'Doe', 'john.doe@example.com');
var a1 = new Admin('Jane', 'Smith', 'jane.smith@example.com', true);

u1.greet();
a1.greet();

a1.addCourse();
a1.removeAllCourses();