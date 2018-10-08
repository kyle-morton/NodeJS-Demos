const http = require('http');
const port = 3000;

//create server object w/ callback for any incoming requests
const server = http.createServer((request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
});

//tell server to start listening on port, 
//2nd param is a callback for any errors 
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});


