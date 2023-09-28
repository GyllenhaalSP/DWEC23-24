var books = [];
const library = document.getElementById("biblioteca");
window.onload = function () {
    showInfo();
}

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

function addBook() {
    var libro = new Book(window.prompt("Introduce el título"), window.prompt("Introduce el autor"), window.prompt("Introduce el año"), window.prompt("Introduce el género"))
    books.push(libro);
    showInfo();
}

function showInfo() {
    if (books.length === 0) {
        library.innerHTML = "<div id='empty'>-- No hay libros en la biblioteca --</div>";
        return;
    }
    library.innerHTML = "";

    for (let book of books) {
        library.innerHTML += "<div class='books'> Título: " + book.title + "<br>Autor: " + book.author + "<br> Año: " + book.year + "<br>Género: " + book.genre + "</div>";

        if (book !== books[books.length - 1]) {
            library.innerHTML += "<hr>";
        }
    }
}

function deleteBook() {
    var search = window.prompt("Introduce el título del libro que quieres eliminar");

    var filteredBooks = books.filter(book => book.title !== search);

    if (filteredBooks.length < books.length) {
        var deletedBooks = books.length - filteredBooks.length;
        alert(deletedBooks + ((books.length - filteredBooks.length) === 1 ? " libro eliminado." : " libros eliminados."));
        alert("'" + search + "'" + " eliminado satisfactoriamente.");
        books = filteredBooks;
    } else {
        alert("No se ha encontrado '" + search + "' en la BB.DD.");
    }
    showInfo();
}