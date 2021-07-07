const http = require('http');

const requestListener = (req, res) => {
    console.log(req.headers);
    
    if (req.url === '/test') {
        res.status = 200;
        return res.end('<h1>Hello i am testing</h1>');
    } else if (req.url === '/') {
        res.statusCode = 200;
        return res.end('<h1>Bismillah, Allah hu akbar</h1>');
    }

    res.statusCode = 404;
    return res.end('<h1>Page not found!</h1>')
}

const server = http.createServer(requestListener);

server.listen(4000, () => {
    console.log('Server is running on port: 4000');
})