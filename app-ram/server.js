const http = require('http');
const host = 'http://localhost';
const port = 3001;
const stats = require('./pcRam.js');

http
.createServer((req, res) =>{
    let url = req.url;

    if (url ==='/stats'){   
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end("<h1>Ola!</h1>");
    }
})
.listen(port, () => console.log(`Link para rodar em ${host}:${port}:${stats}`));