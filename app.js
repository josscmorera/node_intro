const http = require('http');
const port = 5580;

const server = http.createServer((request, response) => {
    const url   = request.url;
    console.log(request.url);
    if (url === '/about') {
        return response.end("about page");
    }
    response.end('Hello daddy!');
    }
);

server.listen(port, () => {

    console.log(`Server listening on port ${port}`);
}
);