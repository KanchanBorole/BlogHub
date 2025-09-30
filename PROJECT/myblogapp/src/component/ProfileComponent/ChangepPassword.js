import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";


function ChangePassword(){

    const navigate = useNavigate();

  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userDetail, setUserDetail] = useState([]);
  
  useEffect(()=>{
       axios.get("http://localhost:3001/blogger/fetch?role=user").then((response)=>{
          setUserDetail(response.data);
       }).catch((err)=>{
          console.log(err);
       });
    },[])


  const handleChangePassword = (e) => {
    e.preventDefault();
    
    if (prevPassword !== localStorage.getItem("password")){
        alert("password must be same as current password");
        return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password must match");
      return;
    }

    var updateDetail = { condition_obj: { password: prevPassword }, content_obj: { password: newPassword }};
    axios.patch("http://localhost:3001/blogger/update", updateDetail).then((response) => {
        alert("Password changed successfully");
        navigate("/logout");
    }).catch((err) => {
        console.log(err);
     });
  }

    return(
        <>
            <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
          <div class="col-lg-12 about-text py-5">
            <div class="p-lg-5 pe-lg-0">
              <h1>Change Password</h1>
              <form onSubmit={handleChangePassword}>
                <div class="mb-3">
                  <label for="prevPassword">Previous Password:</label>  
                  <input type="password" class="form-control" value={prevPassword} onChange={e=>setPrevPassword(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="newPassword">New Password:</label>    
                  <input type="password" class="form-control" value={newPassword} onChange={e=>setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="confirmPassword">Confirm Password:</label>    
                  <input type="password" class="form-control" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default ChangePassword;