const Form = require("../models/Form");

const deleteForm = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedF = await Form.findByIdAndDelete(id);
        if(deletedF){
            return res.status(200).json({message:'form deleted'})
        }
    } catch (error) {
        return res.status(500).json({error:'Something Went Wrong !'})

    }

}
module.exports=deleteForm