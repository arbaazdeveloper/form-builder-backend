const express = require('express');
const createForm = require('../controllers/createForm');
const getFormById = require('../controllers/getFormById');
const getAllForms = require('../controllers/getAllForm');
const updateForm = require('../controllers/updateForm');
const saveResponse = require('../controllers/saveResponse');
const getResponse = require('../controllers/getResponse');
const deleteForm = require('../controllers/deleteForm');
const router = express.Router();

//get routes 
router.get('/get-form/:id', getFormById);
router.get('/get-all-forms', getAllForms);
router.get('/get-response/:formId',getResponse);
//post routes
router.post('/create-form', createForm);
router.post('/save-response/:formId', saveResponse);

// put routes
router.put('/update-form/:id', updateForm);


//delete request
router.delete('/delete-form/:id',deleteForm)
module.exports = router;