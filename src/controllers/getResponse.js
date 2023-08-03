const Response = require("../models/Responses")

const getResponse = async (req, res) => {
    try {
        const formId=req.params.formId;

        const response = await Response.find({formId}).populate('formId')

        if(response.length===0){
            return res.status(404).json({message:'No Response Found For This Form'})
        }
        return res.status(200).json(response)
    } catch (error) {
        
        return res.status(500).json({error:'Something Went wrong !'})
    }
}
module.exports=getResponse