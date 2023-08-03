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
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Form', 
    required: true,
  },
  response: {
    type: [formResponseSchema], 
    default: [],
   
  },
  type:{type:String},
  extrasResponse:{type:Array}
});
const Response=mongoose.model('response',responseShcema)
module.exports=Response;