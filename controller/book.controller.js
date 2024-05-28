const BookModel = require('../models/book');
const express = require('express');

async function addBook(req,res){
    const body = req.body;
    if(!body){
        res.status(400).json({
            status: 'body must not be null'
        });
    }

    try{
        const dataTobeSaved = new BookModel(body);
        await dataTobeSaved.save();

        res.status(200).json({
            status:'successfully saved',
            savedData: body 
        });
    }catch(e){
        res.status(400).json({
            status: 'internal server error'
        });
    }

}


module.exports ={
    addBook
}