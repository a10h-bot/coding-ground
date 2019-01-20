const http = require('http');
http.createServer((req, res) => {
  res.write('hello node http server ');
  res.end();
}).listen(1234, () => {
  console.log('listening on port 1234');

})