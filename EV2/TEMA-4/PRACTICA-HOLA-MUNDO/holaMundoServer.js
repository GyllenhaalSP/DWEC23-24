const http = require('http');
const port = 4000;
const hostname = 'localhost';

const holaMundoServer = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hola mundo :D');
    holaMundoServer.close();
});

holaMundoServer.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});

