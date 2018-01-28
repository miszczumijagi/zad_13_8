var http = require('http');
var fs = require('fs');
/*var StatMode = require('stat-mode');

fs.stat('./404.png', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
}); */

var server = http.createServer();

server.on('request', function (request, response) {
    
    if (request.method === 'GET' && request.url === '/mypage') {
        response.setHeader("Content-Type", "text/html, charset=utf-8");
        fs.readFile('index.html', 'utf-8', function(err, file) {
            if (err) throw err;
            else {
            
            //response.write(file);
            response.end(file);
            };
      });
      
        
    } else {
        response.setHeader("Content-Type", "image/png");
        response.statusCode = 404;
        fs.readFile("./404.png", function(err, img) {
            if (err) throw err;
            else {
                response.write(img);
                response.end();
            };
         });   
            
    }
});

server.listen(8080);

//http://localhost:8080 


