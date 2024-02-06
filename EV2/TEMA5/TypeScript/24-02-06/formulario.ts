window.addEventListener('DOMContentLoaded', (): void => {
    const formulario: HTMLFormElement = document.getElementById('formularioSaludo') as HTMLFormElement;
    const mensajeSaludo: HTMLElement = document.getElementById('mensajeSaludo') as HTMLElement;

    formulario.addEventListener('submit', function (e: Event): void {
        e.preventDefault();

        const nombre: string = (document.getElementById('nombre') as HTMLInputElement).value;
        const edad: number = (document.getElementById('edad') as HTMLInputElement).valueAsNumber;

        mensajeSaludo.innerText = `¡Hola, ${nombre}! Tienes ${edad} años.`;
    });
});
