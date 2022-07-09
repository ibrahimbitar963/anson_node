const { Router } = require('express');
const router =  Router();

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
router.get('',function(req, ress, ) { 
  
    ress.cookie('visted',true,{
        maxAge:60000,
        

    });
    ress.send(ListItems)

  

});
 
 router.post('', function (req, res) { 
    ListItems.push(req.body);
console.log(req.body);
    res.send(200);
});


router.get('/:item', function(req,res) {
    console.log(req.cookies);
//console.log(req.params.item);
const item = req.params.item;
const arrayItem = ListItems.find((i)=>i.item===item);
res.send(arrayItem);
});

module.exports = router;