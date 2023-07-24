const express=require('express');
const createForm = require('../controllers/createForm');
const getFormById = require('../controllers/getFormById');
const router=express.Router();
 
 router.get('/get-form/:id',getFormById)
 router.post('/create-form',createForm);

module.exports=router;