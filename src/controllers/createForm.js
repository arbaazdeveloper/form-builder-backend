const Form = require("../models/Form")

const createForm = async (req, res) => {
    try {
        if(!req.body){
            return res.status(500).json({error:'body cannot be empty'});
        }
        const f1 = new Form(req.body);
        const created = await f1.save();
        return res.status(200).json({message:'form created',form:created})

    } catch (error) {
        return res.status(500).json({ error: 'Something Went Wrong' })
    }
}

module.exports=createForm