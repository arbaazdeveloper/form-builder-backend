const mongoose = require("mongoose");

const db=mongoose.connect('mongodb+srv://arbaazuniquegzp:A6XeztRVT3McISZ6@cluster0.lonpicw.mongodb.net/form').then(()=>console.log('db connected')).catch((err)=>console.log(err))
module.exports=db;