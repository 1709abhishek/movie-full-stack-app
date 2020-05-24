const express = require('express');

const router = express.Router();

// routing to doctors
router.use('/movies', require('./movies'));
router.use('/genre', require('./genres'));


module.exports = router;