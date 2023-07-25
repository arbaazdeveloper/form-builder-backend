const express=require('express');
const createForm = require('../controllers/createForm');
const getFormById = require('../controllers/getFormById');
const getAllForms = require('../controllers/getAllForm');
const router=express.Router();
 
 router.get('/get-form/:id',getFormById);
 router.get('/get-all-forms',getAllForms);
 router.post('/create-form',createForm);

module.exports=router;