const express = require('express');

const router = express.Router();


// routing to doctors
router.use('/', require('./api/v1'));


module.exports = router;