const express = require('express');
const app = express();

console.clear();

app.use(express.json());
app.use('/todos', require('./Express/routes'))

app.get('/', (req, res) => {
    // console.log(req.app.locals);

    // console.log(req.headers.cookie);
    // console.log(cookieParser(req.headers.cookie));

    return res.send('<h1>Hello World!</h1>');
});

app.locals.name = 'my first express app';
// console.log(app.locals.name);

app.locals.email = 'fahimfaisal.soikot@gmail.com';
// console.log(app.locals.email);

app.listen(4000, () => {
    console.log('server running on port: 4000');
})