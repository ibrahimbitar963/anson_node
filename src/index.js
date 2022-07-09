const { urlencoded } = require('express');
const express = require('express');
const itemRouter= require('./routes/items');
const marketRouter = require('./routes/markets');
const cookieParser= require('cookie-parser');
const app = express();
const port = 3001;
app.use(express.json());
app.use(urlencoded());
app.use(cookieParser());
app.use('/api/markets',marketRouter);
app.use((req, res, next) => {
  console.log(`${req.method} :   ${req.url}`);
  next();
});

 
app.use('/api/item',itemRouter);


app.listen(port, () => console.log(`app is runn on port ${port}`));


