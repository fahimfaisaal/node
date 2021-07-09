const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');

// relative files
const buffer = require('./stream_and_buffer/buffer');
const todoRoutes = require('./Express/routes');

app.use(express.json());
app.use(cookieParser());
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    // console.log(req.app.locals);

    // console.log(req.headers.cookie);
    // console.log(cookieParser(req.headers.cookie));
    return res.send('hello')
});

app.locals.name = 'my first express app';
// console.log(app.locals.name);

app.locals.email = 'fahimfaisal.soikot@gmail.com';
// console.log(app.locals.email);

app.listen(4000, () => {
    console.log('server running on port: 4000');
})