const express = require('express');

const app = express();

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    console.log('Token recibido:', token);
    if (token.split(" ")[1] === '11223344') {
        next();
    } else {
        res.status(401).send('Acceso no autorizado');
    }
};

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.get('/ruta-protegida', auth, (req, res) => {
    res.send('Acceso a ruta protegida');
});

app.get('/ruta-publica', (req, res) => {
    res.send('Acceso a ruta pública');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
