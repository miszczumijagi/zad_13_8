/* var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
    response.write('Hello world!');
    response.end();
});
server.listen(9000);

// serwer działa po adresem  http://localhost:9000 */

var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

server.listen(8080);

//adres serwera http://localhost:8080