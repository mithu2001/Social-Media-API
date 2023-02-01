const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6
    },
    confirm_password:{
        type:Number
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
       type:Array,
       default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("User",userSchema);