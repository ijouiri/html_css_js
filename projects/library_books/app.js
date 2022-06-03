// UI elements

class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  // add The book to the dom
  addBook(book){
    const bookList = document.querySelector("#book-list"),
          row = document.createElement("tr");

    row.innerHTML = `<td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><i class="fa fa-trash"></i></td>
      `;

    bookList.appendChild(row);
    
  }

  // remove the left input
  clearInput(){
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".isbn").value = "";
  }


  // show alert messages
  showAlert(msg, className){
    const container = document.querySelector(".container"),
          div = document.createElement("div"),
          form = document.querySelector(".group-form");

    div.className = `${className}`;
    div.innerHTML = `
     <p>${msg}</p> 
    `;

    container.insertBefore(div,form);

    setTimeout(function(){
      document.querySelector(".alert").remove();
    }, 3000);
  }


}


// add remove display books from localStorage
class Storage{
  //get books from localStorage
  static getBooks(){
    let books;
    if(localStorage.getItem("books") == null){
      books = [];
    }else{
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  //diplay Books from localStorage
  static displayBooks(){
    let books = Storage.getBooks();

    books.forEach(function(book){
      let ui = new UI();
      ui.addBook(book);

    })
  }

  //add books to localStorage
  static addBook(book){
    let books = Storage.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  //remove books from localStorage
  static removeBook(isbn){
    let books = Storage.getBooks();

    books.forEach(function(book, index){
      if(book.isbn == isbn){
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));

  }
}

//DOM load event
document.addEventListener("DOMContentLoaded", Storage.displayBooks);


document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  const title = document.querySelector(".title").value,
        author = document.querySelector(".author").value,
        isbn = document.querySelector(".isbn").value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  // check if the fields are empty or not
  if (title == "" || author == "" || isbn == ""){
    ui.showAlert("Please enter all the inputs","alert error");

  }else{
    ui.showAlert("The book has been added Successfully", "alert success");
    Storage.addBook(book);
    ui.addBook(book);
    ui.clearInput();
  }

});


// add delete event
document.querySelector("table").addEventListener("click", function(e){
  const ui = new UI();
  if (e.target.className.includes("fa-trash")){
    e.target.parentElement.parentElement.remove();
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert("The book has been removed", "alert error");
  }
});
