const fetch = require("node-fetch");
const cheerio = require("cheerio");

const url = "https://www.imdb.com/find?ref_=nv_sr_fn&s=tt&q=";

function searchMovies(searchTerm) {
    return fetch(`${url}${searchTerm}`).then(response => response.text());

};
searchMovies("star wars").then(body => {
    const $ = cheerio.load(body);
    $('.findResult').each(function (i, element) {
        const $element = $(element);
        console.log($element.text());
    });
});

module.exports = {
    searchMovies
}