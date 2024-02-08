class Alumno {
    nombre: string;
    edad: number;
    tit: string;

    constructor(nombre: string, edad: number, tit: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.tit = tit;
    }

    mostrarInfo(): string {
        return `\tNombre: ${this.nombre}\n\tEdad: ${this.edad}\n\tTitulación: ${this.tit}\n`;
    }
}

let alumnos: Alumno[] = [];

window.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioAlumno') as HTMLFormElement;
    formulario.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        agregarAlumno();
    });
});

function agregarAlumno() {
    const nombre: string = (document.getElementById('nombre') as HTMLInputElement).value;
    const edad: number = parseInt((document.getElementById('edad') as HTMLInputElement).value);
    const titulacion: string = (document.getElementById('titulacion') as HTMLInputElement).value;

    const alumno: Alumno = new Alumno(nombre, edad, titulacion);
    alumnos.push(alumno);
    // cómo limpio el formulario?

    actualizarListaAlumnos();
}

function actualizarListaAlumnos() {
    const lista: HTMLElement | null = document.getElementById('listaAlumnos');
    if (!lista) {
        console.error('Elemento #listaAlumnos no encontrado');
        return;
    }
    lista.innerHTML = '';
    alumnos.forEach((alumno: Alumno, index: number) => {
        const infoAlumno: HTMLDivElement = document.createElement('div');

        infoAlumno.innerHTML = `Alumno ${index + 1}: <br>`;
        infoAlumno.innerHTML += `${alumno.mostrarInfo().replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;').replace(/\n/g, '<br>')}<br>`;

        lista.appendChild(infoAlumno);
    });
}
