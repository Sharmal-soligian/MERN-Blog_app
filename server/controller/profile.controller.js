const express = require('express');
const router = express.Router();
const http_codes = require('http-status-codes');
const jwt = require('jsonwebtoken');
const secretKey = 'dbfkbdbkdb55vd55dsv55';

router.get('/', async(req, res) => {
    const { token } = req.cookies;
    try {
        const verify = jwt.verify(token, secretKey);
        res.status(http_codes.OK).json(verify);
    } catch(err) {
        console.error('Error verifying cookie: ' + err);
        res.status(http_codes.INTERNAL_SERVER_ERROR).json({
            error: 'Internal server error',
            message: err.message
        });
    }
});

// logout route
router.post('/logout', (req, res) => {
    res.cookie('token', '').status(http_codes.OK).json({
        message: 'Log out successfull'
    });
});


module.exports = router;