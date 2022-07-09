const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());
app.use(urlencoded());
app.use((req, res, next) => {
  console.log(`${req.method} :   ${req.url}`);
  next();
});

const ListItems = [
    {
        item: 'milk',
        count: 1
    },
    {
        item: 'egg',
        count: 5
    }


];


app.listen(port, () => console.log(`app is runn on port ${port}`));

app.get('/test/array',
(req, ress,next )=> {console.log('here is get');
next();
} ,
 (req, ress) => ress.send(ListItems));

app.post('/test/array', function (req, res) {

ListItems.push(req.body);
console.log(req.body);
    res.send(200);
});


app.get('/test/array/:item', function(req,res) {
console.log(req.params.item);
const item = req.params.item;
const arrayItem = ListItems.find((i)=>i.item===item);
res.send(arrayItem);
});
