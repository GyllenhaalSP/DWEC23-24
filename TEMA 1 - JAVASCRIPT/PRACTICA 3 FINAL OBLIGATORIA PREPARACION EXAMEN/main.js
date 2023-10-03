window.onload = function(){
    listarPeliculas();
    imprimirCuadrado();
}

//EJERCICIO 1
var arrayPeliculas = [
    ['El padrino', '1972',
        ['Marlon Brando', 'Al Pacino', 'James Caan']],
    ['Titanic', '1997',
        ['Leonardo DiCaprio', 'Kate Winslett', 'Billy Zane']],
    ['Matrix', '1999',
        ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']]
];

var peliculasHTML = document.getElementById("peliculas");

function listarPeliculas(){
    for (let pelicula of arrayPeliculas){
        peliculasHTML.innerHTML +=
            "<h2>"
            + pelicula[0]
            + "</h2><p>"
            + pelicula[1]
            + "</p><p>Actores principales: "
            + pelicula[2].join(", ")
            + "</p>";
    }
}

//EJERCICIO 2
function imprimirCuadrado(){
    var altura = 10;
    var cuadrado = document.getElementById("cuadrado");
    for(let i = 1; i <= altura; i++){
        for(let j = 1; j <= altura; j++){
            cuadrado.innerHTML +=
                (i === 1
                    || i === altura
                    || j === 1
                    || j === altura) ? " *" : "&nbsp;&nbsp;";
        }
        cuadrado.innerHTML += ("<br>");
    }
}

//EJERCICIO 3
function calcularDias(){
    var mes = document.getElementById("mes").value;
    if (mes > 0 && mes < 13) {
        var year = new Date().getFullYear();
        var dias = new Date(year, mes, 0).getDate();
        alert("El mes " + mes + " tiene " + dias + " días");
        document.getElementById("resultado").innerHTML = ("<p>El mes " + mes + " tiene " + dias + " días</p>");
    } else {
        alert("Introduce un mes válido");
    }
}

//EJERCICIO 4
var estudiantes = [];

function Estudiante(nombre, edad, materias){
    this.nombre = nombre;
    this.edad = edad;
    this.materias = materias;
}

function agregarEstudiante(){
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var materias = document.getElementById("materias").value.split(",");
    var estudiante = new Estudiante(nombre, edad, materias);
    estudiantes.push(estudiante);
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("materias").value = "";
}

function agregarMateria(){
    var materia = document.getElementById("materia").value;
    for(let estudiante of estudiantes) {
        if (estudiante.nombre === document.getElementById("nombre").value) {
            estudiante.materias.push(materia);
            document.getElementById("materia").value = "";
            return;
        }
    }
    alert("No existe ningún estudiante con ese nombre");
}

function mostrarInfo(){
    document.getElementById("info").innerHTML = "";
    for (let estudiante of estudiantes){
        document.getElementById("info").innerHTML += "Nombre: " + estudiante.nombre + "<br>Edad: " + estudiante.edad + "<br>Materias: " + estudiante.materias.join(", ") + "<br><br>";
    }

}

