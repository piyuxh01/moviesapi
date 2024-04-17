const User = require('../models/User');
const bcrypt = require('bcrypt');
exports.signup = async (req,res) =>{
    try{
        const {firstname,lastname,username,mail,password} = req.body;
        const existUser = await User.findOne({mail});
        if(existUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
        }
        const user = await User.create({
            firstname,lastname,username,mail,password
        })
        return res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    } 
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}

exports.login = async (req, res) => {
    try {
      const { mail, password } = req.body;
      
      if (!mail || !password) {
        return res.status(400).json({
          success: false,
          message: "Please provide both email and password",
        });
      }
  
      const user = await User.findOne({ mail });
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  
      const isValidPassword = await user.checkPassword(password);
  
      if (isValidPassword) {
        return res.status(200).json({
          success: true,
          message: "User logged in successfully",
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Incorrect password",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error, please try again later",
      });
    }
  };
  