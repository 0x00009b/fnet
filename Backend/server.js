const express = require('express');
const helmet = require('helmet');
const statuz = require('statuz');
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.referrerPolicy());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});

app.use(limiter);

app.get('/status', statuz);
app.get('/', function (req, res){
  res.sendFile('/home/runner/fnet/index.html')
})
app.get('/admin', function (req, res){
  res.redirect('/home/runner/fnet/pages/rickrole.html')
})
app.listen(3000 ,'0.0.0.0');