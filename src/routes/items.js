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
  
    ress.cookie('vistedd',true,{
        maxAge:1000,
        

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
  //  console.log(req.headers.cookie);
   //console.log(res.cookies);
//console.log(req.params.item);
const item = req.params.item;
const arrayItem = ListItems.find((i)=>i.item===item);
res.send(arrayItem);
});
router.use((request,response,next)=>{
  if(request.session.user){
    next();
  }
  else{
    response.send(401);
  }
  });

router.get('/shopping/cart', (request, response) => {
    const { cart } = request.session;
    console.log('Cart');
    if (!cart) {
      response.send('You have no cart session');
    } else {
      response.send(cart);
    }
  });

  router.post('/shopping/cart/item', (request, response) => {
  const { item, count } = request.body;
  const cartItem = { item, count };
  const { cart } = request.session;
  if (cart) {
    request.session.cart.items.push(cartItem);

    console.log('exicted cart');
  } else {
    console.log('new cart');

    request.session.cart = {
      items: [cartItem],
    };
  }
  response.send(201);
});
  

module.exports = router;