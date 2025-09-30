import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const bloggerSchema=mongoose.Schema({
    _id :Number,
    name:{
        type:String,
        require:[true,'name is required'],
        trim:true,
        lowercase:true
    },
    username:{
        type:String,
        require:[true,'username is required'],
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        require:[true,'email is required'],
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        require:[true,'passowrd is required'],
        minlength:5,
        maxlength:10
    },
    mobile:{
        type:String,
        require:[true,'mobile is required']
    },
    gender:{
        type:String,
        require:[true,'gender is required']
    },
   role:String,
   status:Number,
   info:String
});
//to apply unique validator
mongoose.plugin(mongooseUniqueValidator);

const bloggerSchemaModel=mongoose.model('blogger_collection',bloggerSchema);

export default bloggerSchemaModel;