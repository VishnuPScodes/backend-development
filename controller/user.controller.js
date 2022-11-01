import express from "express";
import User from "../model/user.model.js";

const router=express.Router();



router.get('/',async (req,res)=>{
    try {
        const page=req.query.page || 1
        const size=req.query.limit || 15
        const userData=await User.find().skip((page-1)*size).limit(size).lean().exec();
        const totalPages=Math.ceil(await User.find().countDocuments()/size)
        res.status(201).send({userData,totalPages})
    } catch (error) {
        console.log(error)
    }
  
})

router.post('/',async (req,res)=>{
    try {
        const postData=new User(req.body);
        await postData.save();
        //or
        //const postData= await User.create(req.body);
        //res.send(postData)
        res.status(201).send(postData)
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id',async (req,res)=>{
    try {
       
        const userData=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(200).send(userData);
    } catch (error) {
        console.log(error)
    }
 

})
router.get('/:id',async (req,res)=>{
    const userData=await User.findById(req.params.id);
    res.send(userData)
})
export default router