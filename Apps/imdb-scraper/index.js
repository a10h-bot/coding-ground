const express = require("express");
const app = express();
const scraper = require("./scrapper");
app.get('/', (req, res) => {
  res.json({
    message: " Hello Sacrepper"
  });
});
app.get('/search/ :title', (req, res) => {
  scraper
    .searchMovies(req.params.title)
    .then(movies => {
      res.json(movies)
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port${port}`)
});


function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));