import express from 'express';
import connect from './config/db.js';

import userController from './controller/user.controller.js'

const app=express();

app.use('/users',userController)


app.listen(3000,async (req,res)=>{
    try {
        await connect();
    } catch (error) {
        console.log(error)
    }
   console.log('listening on port 3000');
    
})