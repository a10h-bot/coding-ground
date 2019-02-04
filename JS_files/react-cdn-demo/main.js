const http = require('http');
const port = 1238;
http
  .createServer((req, res) => {
    res.write('Hello Bro!');
    res.end();
  })
  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });
