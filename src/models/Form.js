const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdOn:{type:Date,default:Date.now()},
  elements: [
    {
      type: { type: String, required: true },
      label: { type: String, required: true },
      options: [{ type: String }],
    },
  ],
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;