const express = require('express');
const router = express.Router();
const http_codes = require('http-status-codes');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const jwt = require('jsonwebtoken');
const secretKey = 'dbfkbdbkdb55vd55dsv55';

const Post = require('../model/post.model');

router.post('/', uploadMiddleware.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secretKey, {}, async (err, info) => {
        if(err) throw err;
        const { title, summary, content } = req.body;
        const createPost = await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info?.id
        })
        res.status(http_codes.CREATED).json({
            message: 'New post created',
            createPost
        });
    });
});

router.get('/', async (req, res) => {
    try {
        const get_posts = await Post.find()
                                .populate('author', ['username'])
                                .sort({ createdAt: -1 })
                                .limit(10);

        if(get_posts.length === 0) {
            return res.status(http_codes.NOT_FOUND).json({
                message: 'No posts found'
            });
        }
        res.status(http_codes.OK).json(get_posts);
    } catch(err) {
        console.error('Error getting posts: ' + err);
        res.status(http_codes.INTERNAL_SERVER_ERROR).json({
            error: 'Internal server error',
            message: err.message
        });
    }
});


module.exports = router;