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
    }else if (pathname === '/despedida') {
        res.writeHead(200, {'Content-Type': 'text/html;Charset=UTF-8'});
        res.end(`<h1>¡Hasta Luego! Gracias por visitar la página de despedida.</h1>`);
    } else if(pathname === '/datosJSON') {
        let data = JSON.parse(fs.readFileSync('/home/dwes2324/node-clase/EV2/TEMA-4/PRACTICA_4-1/4-2-2/datos.json', 'utf8'));
        let html = `<h1>Contenido del archivo</h1><br><pre>${JSON.stringify(data, null, "\t")}</pre>`;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
        const nuevosDatos = {
            usuarios: [
                { id: 4, nombre: "NuevoUsuario4", edad: 25 },
                { id: 5, nombre: "Víctor", edad: 30 },
                { id: 6, nombre: "NuevoUsuario6", edad: 22 }
            ]
        };

        const nuevosDatosJSON = JSON.stringify(nuevosDatos);

        fs.writeFile('/home/dwes2324/node-clase/EV2/TEMA-4/PRACTICA_4-1/4-2-2/nuevosDatos.json', nuevosDatosJSON, (error) => {
            if (error) {
                console.log(`Error al escribir el archivo: ${error.message}`);
                return;
            }
            console.log('Archivo escrito correctamente:');
            console.log(nuevosDatosJSON);
        });
    } else if (pathname === '/ejercicioJSON') {
        fs.readFile('/home/dwes2324/node-clase/EV2/TEMA-4/EJERCICIOJSON/index.html', (error, contenido) => {
            if (error) {
                console.log(`Error al leer el archivo: ${error.message}`);
                res.writeHead(500);
                res.end('Error del servidor');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(contenido);
        });
    } else if (pathname === '/script.js') {
        fs.readFile('/home/dwes2324/node-clase/EV2/TEMA-4/EJERCICIOJSON/script.js', (error, contenido) => {
            if (error) {
                console.log(`Error al leer el archivo: ${error.message}`);
                res.writeHead(500);
                res.end('Error del servidor');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(contenido);
        });
    } else if (pathname === '/styles.css') {
        fs.readFile('/home/dwes2324/node-clase/EV2/TEMA-4/EJERCICIOJSON/styles.css', (error, contenido) => {
            if (error) {
                console.log(`Error al leer el archivo: ${error.message}`);
                res.writeHead(500);
                res.end('Error del servidor');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(contenido);
        });
    } else if (pathname === '/datos') {
        let data = JSON.parse(fs.readFileSync('/home/dwes2324/node-clase/EV2/TEMA-4/EJERCICIOJSON/datos.json', 'utf8'));
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    } else if (pathname === '/guardar') {
        let data = JSON.parse(fs.readFileSync('/home/dwes2324/node-clase/EV2/TEMA-4/EJERCICIOJSON/datos.json', 'utf8'));
        data.users.push({nombre: "Nuevo Usuario", edad: 30, ciudad: "Ciudad Nueva"});
        fs.writeFile('/home/dwes2324/node-clase/EV2/TEMA-4/EJERCICIOJSON/datos.json', JSON.stringify(data), (error) => {
            if (error) {
                console.log(`Error al escribir el archivo: ${error.message}`);
                res.writeHead(500);
                res.end('Error del servidor');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Datos guardados correctamente');
        });
    }else {
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


