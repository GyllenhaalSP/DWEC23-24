function Persona() {
    this.nombre = window.prompt("Introduce tu nombre");
    this.edad = window.prompt("Introduce tu edad");
    this.ciudad = window.prompt("Introduce tu ciudad");
  this.presentarse = function () {
        alert("Hola, me llamo " + this.nombre + ", tengo " + this.edad + " años y soy de " + this.ciudad + ".");
  };
}

function crearPersona(){
    var persona = new Persona();
    persona.presentarse();
}