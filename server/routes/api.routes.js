const express = require('express');
const router = express.Router();

const registerController = require('../controller/register.controller');
const loginController = require('../controller/login.controller');

router.use('/register', registerController);
router.use('/login', loginController);

module.exports = router;