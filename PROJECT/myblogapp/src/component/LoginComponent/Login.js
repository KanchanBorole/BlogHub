import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function Login(){

    const navigate = useNavigate();
   
   const [output,setOutput]=useState(null);
   const [email,setEmail]=useState(null);
   const [password,setPassword]=useState(null);

   const HandleSubmit=()=>{
    
    const userDetail ={"email":email,"password":password};
    //write web services 
    axios.post("http://localhost:3001/blogger/login",userDetail).then((response)=>{
       const userDetail= response.data.userList;
       //console.log(userDetail);
       localStorage.setItem("token",response.data.token);
       localStorage.setItem("_id",userDetail._id);
       localStorage.setItem("name",userDetail.name);
       localStorage.setItem("email",userDetail.email);
       localStorage.setItem("password",userDetail.password);
       localStorage.setItem("mobile",userDetail.mobile);
       localStorage.setItem("address",userDetail.address);
       localStorage.setItem("city",userDetail.city);
       localStorage.setItem("gender",userDetail.gender);
       localStorage.setItem("role",userDetail.role);
       localStorage.setItem("status",userDetail.status);
       localStorage.setItem("info",userDetail.info);

       if(userDetail.role=="blogger")
        navigate("/");
        //  setOutput("login as a user");
       else if(userDetail.role=="admin")
        navigate("/");
    //    setOutput("login as a admin");
    // setOutput(response.data.token);
       
    }).catch((err)=>{
        setOutput("Login unsuccessfull");
        setEmail("");
        setPassword("");
    });

   }

    return(
        <>
            {/* About Start */}
       <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
                <div class="col-lg-12 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                       <font style={{"color":"blue"}}>{output}</font>
                        <h1>Login Here!!!</h1>
                        <form>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <br/>   
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <br/>
                        <button type="button" class="btn btn-primary" onClick={HandleSubmit}>Login</button>
                    </form>
                    <br/>
                    <h4>Don't have an account? <Link to="/register">Register now</Link></h4>

                </div>
            </div>
        </div>
    </div>
    {/* About End */}
        </>
    )
}

export default Login;