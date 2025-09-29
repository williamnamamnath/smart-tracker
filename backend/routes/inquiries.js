const { createInquiry, getInquiries } = require('../handlers/manipulateInquiries');

const router = require('express').Router();

//Routes for inquiries
router.post('/create-inquiry', createInquiry)
.get('/get-inquiries', getInquiries)

module.exports = router;