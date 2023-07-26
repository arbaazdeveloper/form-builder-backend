const Response=require('../models/Responses')

const saveResponse = async (req, res) => {
    try {
        const formId = req.params.formId;
        const { response } = req.body;
        const r1 = new Response({ formId, response });
        const savedResponse = await r1.save();
        return res.status(200).json(savedResponse);

    } catch (error) {
       
        return res.status(500).json({ error: 'something went wrong !' })
    }
}
module.exports = saveResponse