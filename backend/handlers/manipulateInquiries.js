const InquirySchema = require("../models/InquiriesModel")


//Adding an inquiry
exports.createInquiry = async (req, res) => {

    const {firstName, lastName, email, comments }  = req.body

    const inquiry = InquirySchema({
        firstName,
        lastName,
        email,
        comments
    })

    try {
        if(!firstName || !lastName || !email || !comments ){
            return res.status(400).json({message: 'All fields are required!'})
        }
        
        await inquiry.save()
        res.status(200).json({message: 'inquiry added successfully', inquiry: inquiry })
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error})
    }
}