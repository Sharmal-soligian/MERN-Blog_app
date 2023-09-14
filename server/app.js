const express = require('express');
const apiRoutes = require('./routes/api.routes');
const cors = require('cors');

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
app.use('/', apiRoutes);

app.get('/', (req, res) => {
    res.send('Test');
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});