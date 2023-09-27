var libros = [];

function Libro(titulo, autor, year, genero){
    this.titulo = titulo;
    this.autor = autor;
    this.year = year;
    this.genero = genero;
}

function agregarLibro(){
    var libro = new Libro(
        window.prompt("Introduce el título"),
        window.prompt("Introduce el autor"),
        window.prompt("Introduce el año"),
        window.prompt("Introduce el género")
    )
    libros.push(libro);
    mostrarInfo();
}

function mostrarInfo(){
    const biblioteca = document.getElementById("biblioteca");
    biblioteca.innerHTML = "";

    for(let libro of libros){
        biblioteca.innerHTML += "<span> Título: " + libro.titulo + ", Autor: " + libro.autor + ", Año: " + libro.year + ", Género: " + libro.genero + "</span><br>";
    }
}

function eliminarLibro(){
    var busqueda = window.prompt("Introduce el título del libro que quieres eliminar");

    var librosFiltrados = libros.filter(libro => libro.titulo !== busqueda);

    if (librosFiltrados.length < libros.length) {
        alert("'" + busqueda + "'" + " eliminado satisfactoriamente.");
        libros = librosFiltrados;
        mostrarInfo();
    } else {
        alert("No se ha encontrado '" + busqueda + "' en la BB.DD.");
    }
}