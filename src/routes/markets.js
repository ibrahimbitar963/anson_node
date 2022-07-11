const {Router, request, response} = require('express');
const marketRouter = Router();

const marketList=[
    {
        id:1,
        store:'fadel ',
        miles:5
    },
    {
        id:2,
        store:'syria center ',
        miles:4
    },
    {
        id:3,
        store: 'durra',
        miles:1
    },
    {
        id:4,
        store: 'super market',
        miles:3.5
    },
    {
        id:5,
        store: 'mini market',
        miles:8
    },
];

// marketRouter.get('',function(request,response){
// response.send(marketList);}
// );
marketRouter.use((request,response,next)=>{
    if(request.session.user){
      next();
    }
    else{
      response.send(401);
    }
    });
marketRouter.get('/:item',function(request,response){
const item = request.params.item;
const maketItem= marketList.find((i)=>i.store===item);
response.send(maketItem);

});

marketRouter.post('',function(request,response){
    marketList.push(request.params);
    console.log(request.body);
    res.send(200);

});

marketRouter.get('',(request,response)=>{

    const {miles}=request.query;
    const parsedMiles= parseInt(miles);
    if( !isNaN(parsedMiles)){
        const filteredStores= marketList.filter((e)=>e.miles<=parsedMiles);
        console.log(filteredStores);
        response.send(filteredStores);

    }
    else {
        console.log("no filter");

        response.send(marketList);
    }       
    

});

// router.get('', (request, response) => {
//     const { miles } = request.query;
//     const parsedMiles = parseInt(miles);
//     if (!isNaN(parsedMiles)) {
//       const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
//       response.send(filteredStores);
//     } else response.send(supermarkets);
//   });

module.exports = marketRouter;