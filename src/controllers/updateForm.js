const Form = require('../models/Form')


const updateForm = async (req, res) => {
    const {title,description, elements,extras}=req.body;
    try {
        if (!req.body) {
            return res.status(500).json({ error: 'body cannot be empty' });
        }
        const id = req.params.id;
        const updatedForm = await Form.findByIdAndUpdate(
            id,
            { title, description, elements,extras},
            { new: true }
          );
        return res.status(200).json({ message: 'form updated', form: updatedForm })

    } catch (error) {
       
        return res.status(500).json({ error: 'Something Went Wrong' })
    }
}
module.exports=updateForm