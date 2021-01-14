const http = require ('http');
http.createServer((req, res) => {
    if (req.url == '/cursoExpress' && req.method == 'GET'){
        res.end('Servidor en Node');
    }
})

.listen(3000, () => {
    console.log('localhost:3000/cursoExpress OK')
})