const express = require('express');
require('dotenv').config();
const {addBook,getBook,deleteBook,patchBook} = require('./controller/book.controller')
const bodyparser = require('body-parser');

const db = require('./db');
const app = express();

app.use(bodyparser.json());


app.get('/',(req,res)=>{
    console.log('hello world');
})


app.post('/book',addBook);

app.get('/book',getBook);


app.patch('/book/:id',patchBook);

app.delete('/book/:id',deleteBook)




const port = process.env.PORT || 8080;


app.listen(port,()=>{
    console.log('server started at port ',port);
})










// Description: Build a simple book library API where users can manage their book collection.


// Add a new book (title, author, genre)
// View all books
// Edit a book
// Delete a book
// Steps:

// Set up a basic Express server.
// Create routes for CRUD operations.
// Use MongoDB to store books.
// Test the endpoints using Postman.


// change