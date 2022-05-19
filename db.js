const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const AuthorsSchema = new Schema({
    id: Number,
    name: String,
    bio: String
})
const BooksSchema = new Schema({
    id: Number,
    authorId:Number,
    publishingHousesId:Number,
    name: String,
    description: String,
    price: String,
    releaseDate: String,
    bookCategory: String,
    numberOfPages: Number
})
const PublishingHousessSchema = new Schema({
    name: String,
    description: String
})
const authors = model('Authors',AuthorsSchema);
const books = model('Books',BooksSchema);
const publishingHouses = model('PublishingHouses',PublishingHousessSchema);

main().catch(err => console.log(err));
async function main()
{
    await mongoose.connect('mongodb://localhost:27017/bookstore')
}

async function addAuthor(id, name, bio){
    const author = new authors();
    author.id = id
    author.name = name
    author.bio = bio
    await author.save();
}

async function getAuthors() {
    return await authors.find({});
}
async function addPublishingHouses({name, description}){
    const publishingHouse = new publishingHouses();
    publishingHouse.name = name
    publishingHouse.description = description
    await publishingHouse.save();
}

async function getPublishingHouses() {
    return await publishingHouses.find({});
}
async function addBook({
    id, 
    authorId, 
    publishingHousesId, 
    name, 
    description, 
    price, 
    releaseDate, 
    bookCategory, 
    numberOfPages
}){
    const book = new books();
    book = {
        ...book, 
        id, 
        authorId, 
        publishingHousesId, 
        name, 
        description, 
        price, 
        releaseDate, 
        bookCategory, 
        numberOfPages
    }
   
    await book.save();
}

async function getBooks() {
    return await books.find({});
}

module.exports = {
    addAuthor,
    getAuthors,
    addBook,
    getBooks,
    addPublishingHouses,
    getPublishingHouses


}