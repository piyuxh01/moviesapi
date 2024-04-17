const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true,
            maxlength:25,
            minlength:3,
        },
        lastname:{
            type:String,
            required:true,
            maxlength:25,
            minlength:3,
        },
        mail:{
            type:String,
            required:true,
            unique:true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please provide a valid email",
            ],
        },
        password:{
            type:String,
            required:true,
            minlength:6,
        },
    },
)

UserSchema.pre('save',async function(next){
    try{
        const prime = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,prime);
        next();
    }
    catch(error){
        next(error);
    }
})

UserSchema.methods.checkPassword = async function(password){
    try{
        const isValid = await bcrypt.compare(password,this.password);
        console.log(isValid);
        return isValid;
    } catch(error) {
        console.error(error);
        throw new Error('Wrong Password');
    }
}

module.exports = new mongoose.model("User",UserSchema)