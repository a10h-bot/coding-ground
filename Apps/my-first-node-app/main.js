const http = require("http");
const myDate = require("./mymodule");
http
  .createServer(function(req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(myDate.myDate() + " " + myDate.);
    res.end();
  })
  .listen(8081);
