const mongoose = require('mongoose');


const uri = 'mongodb://127.0.0.1:27017/library';


mongoose.connect(uri,{});


const db = mongoose.connection;

db.on('connected',()=>{
    console.log('database connected ');
})

db.on('error',(error)=>{
    console.log('something went wrong while fetching',error);
})

db.on('disconnected',(error)=>{
    console.log('database disconnected',error);
})