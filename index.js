const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const controllers = require('./controllers/all.js')
controllers(app);

app.listen(process.env.PORT);