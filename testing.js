const http = require('http');
const fileSystem = require('fs');

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('Hello Helloooo');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3])); //Converts a JavaScript value to a JavaScript Object Notation (JSON) string
        res.end();
    }
    if (req.url === '/api/json') {
        fileSystem.readFile('./sample.json', 'utf8', (err, data) => {
            const jsonData = JSON.parse(data);
            res.write(JSON.stringify(jsonData));
            res.end();
        })
    }
        
}); //this server is actually an EventEmitter. here is where we commonly pass a callback function

server.on('connection', (socket) => { //in real apps, we don't normally respond to connection events
    console.log('new connection');
})

server.listen(3000); //Before listening we wanna register a listener or handler

console.log('listening on port 3000...');