const express = require('express');
require('dotenv').config();
const {addBook} = require('./controller/book.controller')

const db = require('./db');


const app = express();


app.get('/',(req,res)=>{
    console.log('hello world');
})


app.post('/books',addBook);

// app.post('/books',(req,res)=>{
//     console.log('we will post an book here');
// });

// app.patch('/books/:id',(req,res)=>{
//     console.log('we will edit an book here');
// });

// app.delete('/books/:id',(req,res)=>{
//     console.log('we will delete an book here with the help of id');
// })




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