import { add } from "nodemon/lib/rules";
import { addPublishingHouses } from "./db";



const express = require('express')
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());
const db = require("./db.js")
app.get('/', async function (req, res) {
res.send("Hello")
});



app.get('/authors', async function (req, res) {
    var allAuthors = await db.getAuthors();
    res.render("AuthorsViews/index", {allAuthors});
    
});
app.get('/authors/add', async function (req, res) 
{
    res.render("AuthorsViews/add");
});
app.get('/authors/:authorId/edit', async function (req, res) 
{
    var author = await db.getAuthor(req.params);
    console.log(author);
    res.render("AuthorsViews/edit", {author});


});
app.post('/authors/add', async function (req, res) 
{
    await db.addAuthors(req.body);
    res.render("AuthorsViews/add");
});


app.get('/books', async function (req, res) {
    var allBooks = await db.getBooks();
    res.render("BooksViews/index",{allBooks});
});
app.get('/books/add', async function (req, res) 
{
    res.render("BooksViews/add");
});
app.post('/books/add', async function (req, res) 
{
    await db.addBooks(req.body);
    res.render("BooksViews/add");
});



app.get('/publishinghouses', async function (req, res) {
    var allPublishingHouses = await db.getPublishingHouses()

    res.render("PublishingHouseViews/index",{allPublishingHouses});
});
app.get('/publishinghouses/add', async function (req, res) 
{
    res.render("PublishingHouseViews/add");
});
app.post('/publishinghouses/add', async function (req, res) 
{
    await db.addPublishingHouses(req.body);
    res.render("PublishingHouseViews/add");
});


app.listen(3000, function() {
    console.log("Server is running..")
});

