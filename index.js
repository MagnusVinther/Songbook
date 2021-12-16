import http from 'http';

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World! and a test!');
    response.end();
    // console.log('Fellow Pearled!');
}).listen(4000)

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html;Charset=utf8'});
//     res.end('Davs davs - så virker det');
//     });
    
    
    
//     server.listen(4000, () => {
//     console.log("Server is running...");
//     });