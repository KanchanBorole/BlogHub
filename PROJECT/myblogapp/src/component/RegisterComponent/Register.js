import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate= useNavigate();
    const [output,setOutput]=useState(null);
   const [name,setName]=useState(null);
   const [username,setUserName]=useState(null);
   const [email,setEmail]=useState(null);
   const [password,setPassword]=useState(null);
   const [mobile,setMobile]=useState(null);
   const [gender,setGender]=useState(null);
   
   const HandleSubmit =()=>{
     
    const userDetail ={"name":name,"username":username,"email":email,"password":password,"mobile":mobile,"gender":gender};
    
    if(name==null)
    {
        setOutput("name is required");
    }   
    else if(username==null)
    {
        setOutput("username is required");
        
    } 
    else if(email==null)
    {
        setOutput("email is required");
        
    }    
    else if(password==null)
    {
        setOutput("password is required");
    }    
    // else if(password.length>4 && password.length<=10)
    // {
    //     setOutput("password length must be in between 5-10 char");
    // }    
    else
    {
    //Write web services suing a axios tool
     axios.post("http://localhost:3001/blogger/save",userDetail).then((response)=>{
        setOutput("User Register Successfully");
        
        navigate('/login');
     }).catch((error)=>{
        //console.log(error);
        setOutput("User not Register Successfully");
        setName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setGender("");
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
                        <font style={{"color":"blue"}}>{output}</font>
                        <h1>Register Here to Start Blogging!</h1>
                        <form>
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                        <br/> 
                        <div class="form-group">
                            <label for="username">User-Name:</label>
                            <input type="text" class="form-control" value={username} onChange={e=>setUserName(e.target.value)}/>
                        </div>
                        <br/>    
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
                        <div class="form-group">
                            <label for="mobile">Mobile:</label>
                            <input type="text" class="form-control"value={mobile} onChange={e=>setMobile(e.target.value)}/>
                        </div>   
                        <br/>   
                           
                        <div class="form-group">
                            <label for="gender">Gender:</label>
                            &nbsp;&nbsp;&nbsp;
                            Male :<input type='radio' name="gender" value="M" onChange={e=>setGender(e.target.value)}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            Female :<input type='radio' name="gender"value="F" onChange={e=>setGender(e.target.value)}/>
                            
                        </div> 
                        <br/>
                        <button type="button" class="btn btn-primary" onClick={HandleSubmit}>Register</button>
                    </form>
                    <br/>
                    <h4>Already have an account? <Link to="/login">Login now</Link></h4>
                </div>
            </div>
        </div>
    </div>
    {/* About End */} 
        </>
    )
}

export default Register;