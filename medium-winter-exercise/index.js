require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const es6Renderer = require('express-es6-template-engine');
const bcrypt = require('bcryptjs');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';


const logger = morgan('tiny');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    rolling: true,
    //maxAge: 1000 * 60 * 60 * 24 * 7,
    cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

const {homeRouter, userRouter} = require('./routers');
const { layout } = require('./utils');
// const home = require('./controllers/home');

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.use('/', homeRouter);
app.use('/users', userRouter);
app.get('/restricted', (req, res) => {
    res.render('restricted', {
        locals: {
            title: "Member's Page"
        },
        ...layout
    })
})







server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});