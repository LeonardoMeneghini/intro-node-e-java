const http = require('http');
const host = 'http://localhost';
const port = 3001;

http.createServer((req, res) =>{
    res.end('<h1>Server rodando!</h1>')
}).listen(port, () => console.log(`Link para rodar em ${host}:${port}`));