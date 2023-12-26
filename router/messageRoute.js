const express = require('express');
const { create_message } = require('../Controller/messageController');
const router = express.Router()



//post user c --- for create
router.post('/message',create_message)




module.exports = router