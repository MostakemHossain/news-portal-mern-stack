const authModal = require("../models/authModal");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken")
 class authController{
    login= async(req,res)=>{
        const {email,password}= req.body;
        if(!email){
            return res.status(404).json({message:"Email is required"});
        }
        if(!password){
            return res.status(404).json({message:"Password is required"});
        }

        try {
            const user= await authModal.findOne({email:email}).select("+password");
           if(user){
            const match= await bcrypt.compare(password,user.password);
            if(match){
                const obj={
                    id:user.id,
                    email:user.email,
                    name:user.name,
                    role:user.role,
                    category:user.category

                }
                const token= jwt.sign(obj,process.env.serect,process.env.exp_time);
                return res.status(201).json({message:"Login Success",token:token});

            }else{
               return res.status(404).json({message:"Invalid Email or Password"});
            }
           }else{
            return res.status(404).json({message:"User not Found!!!"});
           }
            
        } catch (error) {
            console.log(error);
            
        }

    }

 }
 module.exports= new authController()