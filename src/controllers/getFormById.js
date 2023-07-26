const Form = require("../models/Form")

const getFormById = async (req, res) => {
    try {
        const  id  = req.params.id
        const found = await Form.findById({_id:id })
        if (!found) {
            return res.status(404).json({ message: 'Form Not Found !' })
        }
        return res.status(200).json(found)
    } catch (error) {
      
        return res.status(500).json({ error: 'somethin went wrong !' })
    }
}
module.exports=getFormById