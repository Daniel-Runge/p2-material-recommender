const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Gustav</h1>');
    res.end();
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server running at port: ${port} `));