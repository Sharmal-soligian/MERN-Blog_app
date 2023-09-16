const express = require('express');
const router = express.Router();
const http_codes = require('http-status-codes');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

router.post('/', uploadMiddleware.single('file') ,(req, res) => {
    res.json(req.files);
});


module.exports = router;