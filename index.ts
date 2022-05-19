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
    res.render("pages/authors", {allAuthors});
});
app.get('/books', async function (req, res) {
    var allBooks = await db.getBooks();
    res.render("pages/books",{allBooks});
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

