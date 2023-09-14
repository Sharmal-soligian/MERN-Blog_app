const express = require('express');
const router = express.Router();
const http_codes = require('http-status-codes');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../model/user.model');

router.post('/', async(req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(http_codes.BAD_REQUEST).json({
            error: 'Username and password are required',
            message: 'Please enter required fields'
        });
    }
    
    try {
        const uniqueUser = await User.findOne({ username: username });
        if(uniqueUser) {
            return res.status(http_codes.CONFLICT).json({
                error: 'User with this username exists'
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({ username, password: hashedPassword });
        res.status(http_codes.CREATED).json({
            message: 'User successfully created',
        })
    } catch(err) {
        console.error('Error creating user: ' + err);
        res.status(http_codes.INTERNAL_SERVER_ERROR).json({
            error: 'Internal server errr',
            message: err.message
        });
    }
});

module.exports = router;