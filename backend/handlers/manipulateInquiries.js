const InquirySchema = require("../models/InquiriesModel")


//Adding an inquiry
const newInquiry = async (req, res) => {

    const {firstName, lastName, email, description }  = req.body

    const inquiry = InquirySchema({
        user: req.user.id,
        firstName,
        lastName,
        email,
        description
    })

    try {
        if(!firstName || !lastName || !email || !description ){
            return res.status(400).json({message: 'All fields are required!'})
        }
        
        await inquiry.save()
        res.status(200).json({ 
            message: 'inquiry added successfully', 
            inquiry: inquiry 
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Server error', 
            error: error 
        })
    }
};


//Getting all inquiries
const getInquiries = async (req, res) => {
    try {
        const inquiries = await InquirySchema.find().sort({createdAt: -1});
        res.status(200).json({ 
            message: 'Inquiries retrieved successfully', 
            data: inquiries 
        });
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};

module.exports = {
    newInquiry,
    getInquiries
};