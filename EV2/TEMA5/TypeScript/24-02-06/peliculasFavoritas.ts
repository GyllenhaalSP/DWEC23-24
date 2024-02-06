let peliculas: [string, number, string][] = [];

window.addEventListener('DOMContentLoaded', (): void => {
    const formulario: HTMLFormElement = document.getElementById('formularioPelicula') as HTMLFormElement;

    formulario.addEventListener('submit', (e: Event): void => {
        e.preventDefault();

        const titulo: string  = (document.getElementById('titulo') as HTMLInputElement).value;
        const ano: number = parseInt((document.getElementById('ano') as HTMLInputElement).value);
        const genero: string = (document.getElementById('genero') as HTMLSelectElement).value;

        peliculas.push([titulo, ano, genero]);
        mostrarPeliculas();
    });
});

function mostrarPeliculas(): void {
    const lista: HTMLUListElement = document.getElementById('listaPeliculas') as HTMLUListElement;
    lista.innerHTML = '';

    peliculas.forEach((pelicula: [string, number, string]): void => {
        const elemento: HTMLElement = document.createElement('li');
        elemento.textContent = `Título: ${pelicula[0]}, Año: ${pelicula[1]}, Género: ${pelicula[2]}`;
        lista.appendChild(elemento);
    });
}
