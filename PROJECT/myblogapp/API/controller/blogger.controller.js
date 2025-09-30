import '../model/connection.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import bloggerSchemaModel from '../model/blogger.model.js';

 export var save =async(req,res)=>{
  
    var userList = await bloggerSchemaModel.find();
    var len =userList.length;
     var _id = (len==0)?1:userList[len-1]._id+1;
   var userDetail ={...req.body,"_id":_id,"role":"blogger","status":1,"info":Date()};  
   try{
    const users =await bloggerSchemaModel.create(userDetail);
    res.status(201).json({"status":"Resoure reated successfully"});
   }
   catch(err)
   {
    //console.log(err);
    res.status(500).json({"status":"false"});
   }
   }

   export const fetch = async(req,res)=>{
    // console.log("h1");
     var condition_obj = url.parse(req.url,true).query;
      // console.log(condition_obj);
      // var user =await userSchemaModel.findOne(condition_obj);
      // if(user)
      //   {
      //     res.status(200).json({"user":user});
      //   }
      //   else
      //   {
      //     res.status(404).json({"result":"user not found in database"});
      //   }
      var user =await bloggerSchemaModel.find(condition_obj);
      // console.log(user);
      if(user.length!=0)
      {
        res.status(200).json(user);
      }
      else
      {
        res.status(404).json({"result":"user not found in database"});
      }

  }

  export const update =async(req,res)=>{
    // console.log("h1");
      var condition_obj = req.body.condition_obj;    
      //console.log(condition_obj);
     var user= await bloggerSchemaModel.findOne(condition_obj);
    //  console.log(user);
      if(user)
      {
        var update_user = await bloggerSchemaModel.updateOne(req.body.condition_obj,{$set:req.body.content_obj});
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
    var user=await  bloggerSchemaModel.findOne(req.body);

    //console.log(user);
      if(user)
      {
        var delete_user= await bloggerSchemaModel.deleteOne(req.body);
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
     var userList =await bloggerSchemaModel.find(userDetail);
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

