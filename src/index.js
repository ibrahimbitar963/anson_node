const { urlencoded, request, response } = require('express');
const express = require('express');
const itemRouter= require('./routes/items');
const authRoute= require('./routes/auth');
const marketRouter = require('./routes/markets');
const cookieParser= require('cookie-parser');
require('./database');
const app = express();
const session = require('express-session');
const port = 3001;
app.use(express.json());
app.use(session({
  secret:'sl;askdlaskl;dkass',
  resave:false,
  saveUninitialized:false
}));
app.use(urlencoded());
app.use(cookieParser());
app


app.use('/api/markets',marketRouter);
app.use('/api/auth',authRoute);
app.use('/api/item',itemRouter);


app.listen(port, () => console.log(`app is runn on port ${port}`));


