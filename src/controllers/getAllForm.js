const Form = require("../models/Form")

const getAllForms=async(req,res)=>{
    try {
        const forms=await Form.find();
        return res.status(200).json(forms);
        
    } catch (error) {
        return res.status(500).json({error:'Something Went Wrong !'})
        
    }
}
module.exports=getAllForms;