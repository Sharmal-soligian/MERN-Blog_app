const express = require('express');
const router = express.Router();
const http_codes = require('http-status-codes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'dbfkbdbkdb55vd55dsv55';

const User = require('../model/user.model');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(http_codes.BAD_REQUEST).json({
            error: 'username and password are required',
            message: 'Enter all required field'
        });
    }
    try {
        const registered_user = await User.findOne({ username });
        if (!registered_user) {
            return res.status(http_codes.UNAUTHORIZED).json({
                error: 'Username not registered'
            });
        }

        const passwordMatch = await bcrypt.compare(password, registered_user?.password);
        if (!passwordMatch) {
            return res.status(http_codes.UNAUTHORIZED).json({
                error: 'Invalid credentials',
                message: 'Username or password is incorrect'
            });
        }

        const token = await jwt.sign({ id: registered_user._id }, secretKey)
        res.cookie('token', token, { httpOnly: true, sameSite: 'Strict', secure: true }).status(http_codes.OK).json({
            message: 'Successfully logged in',
            username: username,
            id: registered_user._id
        });
    } catch (err) {
        console.error('Error loggin: ' + err);
        res.status(http_codes.INTERNAL_SERVER_ERROR).json({
            error: 'Internal server error',
            message: err.message
        });
    }
});

module.exports = router;