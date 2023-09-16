const express = require('express');
const router = express.Router();

const registerController = require('../controller/register.controller');
const loginController = require('../controller/login.controller');
const profileController = require('../controller/profile.controller');
const postsController = require('../controller/posts.controller');

router.use('/register', registerController);
router.use('/login', loginController);
router.use('/profile', profileController);
router.use('/posts', postsController);

module.exports = router;