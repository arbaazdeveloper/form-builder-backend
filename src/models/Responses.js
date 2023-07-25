const mongoose = require('mongoose');

const formResponseSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    
  },
});

const responseShcema= new mongoose.Schema({
  formId: {
    type: String,
    required: true,
  },
  response: {
    type: [formResponseSchema], 
    default: [],
  },
});
const Response=mongoose.model('response',responseShcema)
module.exports=Response;