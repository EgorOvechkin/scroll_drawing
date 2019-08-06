// содежимое index.js
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5000;
const url = require('url');

const requestHandler = (request, response) => {
  const urlParts = url.parse(request.url, true);
  const filePath = urlParts.pathname === '/' ?
    './index.html' :
    `./${urlParts.pathname}`;

  fs.readFile(filePath, function(error, contents) {
    response.end(contents);
  });
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
});
