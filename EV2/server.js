const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3380;
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/404.css') {
        servirArchivo('404.css', 'text/css', res)
    } else if (pathname === '/404.png') {
        servirArchivo('404.png', 'image/png', res)
    } else if (pathname === '/iniciar-practica') {
        const rutaPractica = parsedUrl.query.ruta;
        if (rutaPractica === 'EV2/TEMA-4/PRACTICA-HOLA-MUNDO') {
            iniciarHolaMundo(res);
        }else if(rutaPractica === 'EV2/TEMA-4/PRACTICA_4-1-1') {
            mostrarContenidoArchivo(res, '/home/dwes2324/node-clase/EV2/TEMA-4/PRACTICA_4-1/4-1-1/archivo.txt')
        }
    } else if (pathname === '/' || pathname === '/index.html') {
        servirArchivo('index.html', 'text/html', res);
    }else if (pathname === '/saludo') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`<h1>¡Hola! Bienvenido a la página de saludos.</h1>`);
    }else if (pathname === '/despedida'){
        res.writeHead(200, {'Content-Type': 'text/html;Charset=UTF-8'});
        res.end(`<h1>¡Hasta Luego! Gracias por visitar la página de despedida.</h1>`);
    } else {
        servirArchivo('404.html', 'text/html', res);
    }
});

server.listen(port, () => {
    console.log(`Servidor maestro ejecutándose en http://localhost:${port}`);
});

function servirArchivo(archivo, tipo, res) {
    fs.readFile(archivo, (error, contenido) => {
        if (error) {
            console.log(`Error al leer el archivo: ${error.message}`);
            res.writeHead(500);
            res.end('Error del servidor');
            return;
        }
        res.writeHead(200, {'Content-Type': tipo});
        res.end(contenido);
    });
}

function iniciarHolaMundo(res) {
    exec('node /home/dwes2324/node-clase/EV2/TEMA-4/PRACTICA-HOLA-MUNDO/holaMundoServer.js', (error) => {
        if (error) {
            console.log(`Error al ejecutar el comando: ${error.message}`);
            res.writeHead(500);
            res.end('Error del servidor');
        }
    });
}

function mostrarContenidoArchivo(res, rutaArchivo) {
    fs.readFile(rutaArchivo, 'utf8', (error, contenido) => {
        if (error) {
            console.error(`Error al leer el archivo: ${error.message}`);
            res.writeHead(500);
            res.end(`Error al leer el archivo: ${error.message}`);
            return;
        }

        let html = `<h1>Contenido del archivo</h1><br><pre>${contenido}</pre>`;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    });
}


