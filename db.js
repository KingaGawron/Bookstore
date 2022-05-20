const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const AuthorsSchema = new Schema({
    name: String,
    bio: String
})
const BooksSchema = new Schema({

    name: String,
    description: String,
    price: Number,
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

async function addAuthors({name, bio}){
    const author = new authors();

    author.name = name
    author.bio = bio
    await author.save();
}

async function getAuthors() {
    return await authors.find({});
}
async function getAuthor({authorId}) {
    
    return await authors.findOne({_id: authorId});
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
async function addBooks({
    name, 
    description, 
    price, 
    releaseDate, 
    bookCategory, 
    numberOfPages
}){
    const book = new books();
    book.name = name;
    book.description= description;
    book.price = price;
    book.releaseDate = releaseDate;
    book.bookCategory = bookCategory;
    book.numberOfPages = numberOfPages;
    await book.save();
}

async function getBooks() {
    return await books.find({});
}

module.exports = {
    addAuthors,
    getAuthors,
    getAuthor,

    addBooks,
    getBooks,

    addPublishingHouses,
    getPublishingHouses


}