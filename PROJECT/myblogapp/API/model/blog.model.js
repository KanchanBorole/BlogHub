import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const blogSchema=mongoose.Schema({
    _id: Number,
    title:{
        type:String,
        require:[true,'title is required']
    },
    category:{
        type:String,
        require:[true,'category is required']
    },
    content:{
        type:String,
        require:[true,'content is required']
    },
    imagenm:{
        type:String,
        require:[true,'image is required']
    },
    bloggername:{
        type:String,
        require:[true,'bloggername is required']
    },
    status:Number,
    info:String
});

//to apply unique validator
mongoose.plugin(mongooseUniqueValidator);

const blogSchemaModel=mongoose.model('blog_collection',blogSchema);

export default blogSchemaModel;