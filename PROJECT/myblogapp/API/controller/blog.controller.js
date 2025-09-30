import '../model/connection.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import blogSchemaModel from '../model/blog.model.js';
import path from 'path';

 export var save =async(req,res)=>{
  
   var userList = await blogSchemaModel.find();
   var len =userList.length;
   var _id = (len==0)?1:userList[len-1]._id+1;

   var blogImage= req.files.image;
   var Imagenm = rs.generate()+"-"+Date.now()+"-"+blogImage.name;

   var blogDetail ={...req.body,"imagenm":Imagenm,"_id":_id,"status":1,"info":Date()}; 
   
   try{
    await blogSchemaModel.create(blogDetail);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const uploadPath = path.join(__dirname, "../../public/assets/uploads/blogimages", Imagenm);
    await blogImage.mv(uploadPath);
    res.status(201).json({ success: true, message: "Blog posted successfully!" });

   }
  catch(err) {
    console.log("Blog Save Error:", err); // add this line
    res.status(500).json({ status: false, message: "Internal Server Error" });
}
}

export const fetch = async (req, res) => {
  const condition_obj = url.parse(req.url, true).query;

if (condition_obj._id) {
  condition_obj._id = parseInt(condition_obj._id);  
}

  console.log("Fetching blogs with condition:", condition_obj);

  const blogs = await blogSchemaModel.find(condition_obj);
  console.log("Blogs found:", blogs);

  if (blogs.length !== 0) {
    res.status(200).json(blogs);
  } else {
    res.status(404).json({ result: "No blogs found." });
  }
};


// export const fetch = async(req,res)=>{
//     // console.log("h1");
//      var condition_obj = url.parse(req.url,true).query;
//       // console.log(condition_obj);
//       // var user =await userSchemaModel.findOne(condition_obj);
//       // if(user)
//       //   {
//       //     res.status(200).json({"user":user});
//       //   }
//       //   else
//       //   {
//       //     res.status(404).json({"result":"user not found in database"});
//       //   }
//       var user =await blogSchemaModel.find(condition_obj);
//       // console.log(user);
//       if(user.length!=0)
//       {
//         res.status(200).json(user);
//       }
//       else
//       {
//         res.status(404).json({"result":"user not found in database"});
//       }

//   }

  export const update =async(req,res)=>{
    // console.log("h1");
      var condition_obj = req.body.condition_obj;    
      //console.log(condition_obj);
     var user= await blogSchemaModel.findOne(condition_obj);
    //  console.log(user);
      if(user)
      {
        var update_user = await blogSchemaModel.updateOne(req.body.condition_obj,{$set:req.body.content_obj});
          if(update_user)
          {
            res.status(200).json({"result":"user updated succesffully"})
         
          } 
          else
          {
            res.status(500).json({"result":"user not updated succesffully"})
          }
      } 
      else
      {
        res.status(404).json({"result":"user not found in databse"});
      } 
    }


    export const deletUser = async(req,res)=>{
    var user=await  blogSchemaModel.findOne(req.body);

    //console.log(user);
      if(user)
      {
        var delete_user= await blogSchemaModel.deleteOne(req.body);
        if(delete_user)
        {
          res.status(200).json({"result":"user deleted succesffully"})
         
        } 
        else
        {
          res.status(500).json({"result":"user not deleted succesffully"})
          
        }
      }
      else
      {
        res.status(404).json({"result":"user not found in databse"}); 
      }
    }

    export const login =async(req,res)=>{
        //console.log("h1");
      
      var userDetail = {...req.body,"status":1};        
       //console.log(userDetail);
     var userList =await blogSchemaModel.find(userDetail);
     //console.log(userList);
     if(userList.length!=0)
     {
       const payload ={"subject":userList[0].email};
       const key =rs.generate();
       const token = jwt.sign(payload,key);
       res.status(200).json({"token":token,"userList":userList[0]}); 
     }
     else
     {
       res.status(500).json({"token":"token error"});
     }
    }

