const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

require('./db/db');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(cors());


// Require the controller after the middleware




app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port  9000');
});