const Response=require('../models/Responses')

const saveResponse = async (req, res) => {
    try {
        const formId = req.params.formId;
        const { response,extrasResponse } = req.body;
        const formResponse = new Response({ formId, response,extrasResponse });
        const savedResponse = await formResponse.save();
        return res.status(200).json(savedResponse);

    } catch (error) {
       
        return res.status(500).json({ error: 'something went wrong !' })
    }
}
module.exports = saveResponse