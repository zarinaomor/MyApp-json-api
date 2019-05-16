const express = require('express');
const createError = require('http-errors')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

console.log(process.env.MY_SECRET)

require('./db/db');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

// app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const stockController = require('./controllers/stockController');
const authController = require('./controllers/authController');

app.use('/api/v1', stockController);
app.use('/auth', authController);


app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port  9000');
});