const express = require('express');
const router = express.Router();
const users = require('../models/userSchema')




router.post("/Register",async(req,res)=>{
    const {name,email,age,mobile,work,address,desc} = req.body;
    
    try {
        const preuser = await users.findOne({email:email})
        console.log(preuser);
        if(preuser){
            res.status(404).json("this is user is already present")
        }else{
            const adduser = new users({
                name,email,age,mobile,work,address,desc
            });
            await adduser.save();
            res.status(200).json(adduser);
            console.log(adduser)
        }
    } catch (error) {
        console.log('error',error)
        res.status(500).json(error);
    }
    
})

// get userdata
router.get('/getdata',async(req,res)=>{
    try {
       const userdata = await users.find();
       res.status(200).json(userdata);
       console.log(userdata); 
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/getuser/:id', async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const userindividual = await users.findById(id); 
        if (!userindividual) {
            return res.status(404).json("User not found");
        }
        console.log(userindividual);
        res.status(200).json(userindividual);
    } catch (error) {
        res.status(500).json(error);
    }
});

// update user data
router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateuser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        })
        console.log(updateuser);
        res.status(200).json(updateuser);
        
    } catch (error) {
        res.status(500).json(error);
    }
})

// delete user

router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deleteuser = await users.findByIdAndDelete(id); 
        if (!deleteuser) {
            return res.status(404).json("User not found");
        }
        console.log(deleteuser);
        res.status(200).json(deleteuser);
        
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;