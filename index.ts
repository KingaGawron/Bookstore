const express = require('express')
const app = express();
app.set('view engine', 'ejs');
const db = require("./db.js")

app.get('/', async function (req, res) {
    db.addAuthor(1, "Adam", "Mickiewicz");
    var allAuthors = await db.showAuthors();
    res.render("index", {allAuthors});
});
app.get('/books', function (req, res) {
    res.render("pages/books");
});
app.listen(3000, function() {
    console.log("Server is running..")
});

