import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ManageBloggers(){

    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState([]);

    useEffect(()=>{
       axios.get("http://localhost:3001/blogger/fetch?role=blogger").then((response)=>{
          setUserDetail(response.data);
       }).catch((err)=>{
          console.log(err);
       });
    })

    const ChangeStatus = (_id,s)=>{
        if(s=="verify")
        {
           var updateDetail={"condition_obj":{"_id":_id},"content_obj":{"status":1}}
           axios.patch("http://localhost:3001/blogger/update",updateDetail).then((reponse)=>{
              alert("user updated successfully");
              navigate("/managebloggers");
           }).catch((err)=>{
              console.log(err);
           });
        }
        else if(s=="block")
        {
            var updateDetail={"condition_obj":{"_id":_id},"content_obj":{"status":0}}
           axios.patch("http://localhost:3001/blogger/update",updateDetail).then((reponse)=>{
              alert("user updated successfully");
              navigate("/managebloggers");
           }).catch((err)=>{
              console.log(err);
           });
        }   
        else
        {
           var deleteDetail={"data":{"_id":_id}};
           axios.delete("http://localhost:3001/blogger/delete",deleteDetail).then((reponse)=>{
              alert("user deleted successfully");
              navigate("/managebloggers");
           }).catch((err)=>{
              console.log(err);
           });
        } 
    }

    return(
        <>
            {/* About Start */}
       <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
                <div class="col-lg-12 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h1>Manage Bloggers Here</h1>
                        {/* {userDetail.map((row)=>(
                            <p>{row._id}</p>
                        ))} */}
                        
                            <table class="table table-bordered" border="2px">
                                <tr>
                                    <th>Registration ID</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Gender</th>
                                    <th>Info</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    userDetail.map((row)=>(
                                  <tr>
                                    <td>{row._id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.username}</td>
                                    <td>{row.email}</td>
                                    <td>{row.mobile}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.info}</td>
                                    <td>{row.status==0 && <a style={{"color":"green"}} onClick={()=>{ChangeStatus(row._id,'verify')}}>verify user</a>}
                                        {row.status==1 && <a style={{"color":"orange"}} onClick={()=>{ChangeStatus(row._id,'block')}}>block user</a>}</td>
                                    <td>{<a style={{"color":"red"}} onClick={()=>{ChangeStatus(row._id,'delete')}}>Delete</a>}</td>
                                  </tr>
                                ))
                                }
                                
                            </table>
                        </div>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    )
}

export default ManageBloggers;