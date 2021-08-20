const express = require('express');
const expressHbs = require('express-handlebars');
const path =require('path');

const {PORT} = require('./config/variables');
const users = require ('./db/users');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));



app.get('/ping', ((req, res) => {
    res.json('Pong')
}));

app.get('/', (req, res) => {
    // console.log(req);

    // res.end('sadf');
    // res.send('<h1>xfj</h1>');
   // res.write('hello');
   // res.json({name:'Viktor'});
   //  res.end();
    res.status(404).end('Not Found');
});
app.get('/login', ((req, res) => {
    res.render('login');
}))
app.get('/users',(req, res) => {
    res.render('users', {userName: 'Viktor', users});

});
app.post('/auth', (req, res) => {
    res.json('OK')
})




app.listen(PORT, ()=>{
    console.log('App listen', PORT)
});
