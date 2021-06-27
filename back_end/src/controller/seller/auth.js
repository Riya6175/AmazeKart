const User = require("../../models/user");
const jwt = require("jsonwebtoken");
 const { validationResult } = require("express-validator");

exports.signup = (req,res) => {

    User.findOne({
        email: req.body.email
    }).exec(async (error,user) => {
        if(user) return res.status(400).json({
            message: "seller already registered"
        });

        const {
            firstName,
            lastName,
            email,
            password,
        } = req.body;

        const hash_password = await bcrypt.hash(password,10)
        
        const _user = new User({ 
            firstName,
            lastName, 
            email, 
            hash_password, 
            username:Math.random().toString(),
            role: 'seller'
        })

        _user.save((error, data)=>{
            if(error){
                return res.status(400).json({
                    message:"something wrong"
                })
            }

            if(data){
                return res.status(201).json({
                   message: "seller created succesfully"
                })
            }
        })
    })
}

exports.signin = (req,res)=>{
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(error){
            return res.status(400).json({error});
        }
        if(user){
            if(user.authenticate(req.body.password) && user.role === 'seller'){
                const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: '2h'});
                const { _id, firstName, lastName, email, role, fullname} = user;
                res.status(200).json({
                    token,
                    user:{
                        _id, firstName,lastName,email,role,fullname
                    }
                })
            }
            else{
                res.status(400).json({
                    message: 'Invalid password'
                })
            }
        }else{
            return res.status(400).json({message : 'something went wrong'});
        }
    })
}

exports.signout = (req,res)=>{
    res.clearCookie('token');
    res.status(200).json({
        message: 'Signout successfull'
    })
}