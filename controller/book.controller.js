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

async function getBook(req,res){
    console.log('get book function running');

    try{
        const response = await BookModel.find();
        return res.status(200).json(response);
    }catch(e){
        res.status(400).json({
            status: e
        });
    }
}

async function patchBook(req,res){
    console.log('patch book function is running');
    const id = req.params.id;
    const body = req.body;
    try{
        const dataToSave = await BookModel.findByIdAndUpdate(id,body,{
            new:true,
            runValidators:true
        });
        res.status(200).json(dataToSave);
    }catch(e){
        res.status(400).json({
            status: e
        });

    }
}




async function deleteBook(req,res){
    console.log('delete book function is running');
    const id = req.params.id;
    try{
        const response = await BookModel.findByIdAndDelete(id);
        if(!response){
            res.status(400).json({
                status: 'unable to find the id'
            });
        }
        res.status(200).json({
            status: 'successfully deleted the id',
            data: response
        });
    }catch(e){
        res.status(400).json({
            status: e
        });
    }
}


module.exports ={
    addBook,
    getBook,
    deleteBook,
    patchBook
}