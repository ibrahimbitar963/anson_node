const mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/anosn_db')
.then(()=>console.log('connceted'))
.catch((err)=>console.log(err));

