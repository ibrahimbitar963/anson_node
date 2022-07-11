const {Router, request, response} = require('express');
const session = require('express-session');
const user = require('../database/schemas/user');
const hashPassword = require('../utils/helper');
const router= Router();


router.post('/login',(request,response)=>{
const {userName , password}= request.body;
if(userName&& password){
    if(request.session.user){
        response.send(request.session.user);
    }
    else{
        request.session.user={
            userName,
        }
        response.send(request.session);
    }
}
else{
response.send(401);
}


});

router.post('/register',async(request,response)=>{
const {username,password,email}=request.body;
const userDB = await user.findOne({$or :[{username},{email}]});

if(userDB){
    response.status(400).send({msg:'user already exisits'});
}
else{
    const hashedPassword= hashPassword.hashPassword(password);
   const newUser=await user.create({username,password:hashedPassword,email});
response.status(200).send({msg:'User created succesffluy'});
}


});


module.exports = router;
