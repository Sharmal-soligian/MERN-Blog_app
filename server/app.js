const express = require('express');
const apiRoutes = require('./routes/api.routes');
const cors = require('cors');
const cookie_parser = require('cookie-parser');

// Env setting
require('dotenv').config();

// Database seting
require('./config/database');

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(cookie_parser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/', apiRoutes);

app.get('/', (req, res) => {
    res.send('Test');
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});