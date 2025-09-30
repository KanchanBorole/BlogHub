import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditProfile(){

    const navigate = useNavigate();

  const [userDetail, setUserDetail] = useState({});
  const [editField, setEditField] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    var userId = localStorage.getItem("_id");
    axios.get("http://localhost:3001/blogger/fetch?_id=" + userId).then((response) => {
        if (response.data.length > 0) {
          setUserDetail(response.data[0]);
        }
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditClick = (field) => {
    setEditField(field);
    setEditValue(userDetail[field] || "");
  };

  const handleSaveClick = () => {
    if (editValue.trim() === "") {
      alert("Value cannot be empty");
      return;
    }

    var userId = localStorage.getItem("_id");
    var updateDetail = {
      condition_obj: { _id: userId },content_obj: { [editField]: editValue}
    };

    axios.patch("http://localhost:3001/blogger/update", updateDetail).then((response) => {
        alert(editField + " updated successfully");
        var updatedUser = { ...userDetail };
        updatedUser[editField] = editValue;
        setUserDetail(updatedUser);
        setEditField("");
        setEditValue("");
      }).catch((err) => {
        console.log(err);
      });
  };

  const handleCancelClick = () => {
    setEditField("");
    setEditValue("");
  };

    return(
        <>
            <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
          <div class="col-lg-12 about-text py-5">
            <div class="p-lg-5 pe-lg-0">
              <h1>Edit Profile</h1>
              <table class="table table-bordered" border="2px">
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>

                <tr>
                  <td>Name</td>
                  <td>
                    {editField === "name"?(
                      <input type="text" class="form-control" value={editValue} 
                      onChange={(e) => setEditValue(e.target.value)}/>)
                      :(userDetail.name)}
                  </td>
                  <td>
                    {editField === "name"?(
                      <>
                        <a style={{ color: "green", cursor: "pointer" }} onClick={handleSaveClick}>Save</a> |{" "}
                        <a style={{ color: "orange", cursor: "pointer" }} onClick={handleCancelClick}>Cancel</a>
                      </>
                    ):(
                      <a style={{ color: "blue", cursor: "pointer" }} onClick={() => handleEditClick("name")}>Edit</a>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>UserName</td>
                  <td>
                    {editField === "username"?(
                      <input type="text" class="form-control" value={editValue} 
                      onChange={(e) => setEditValue(e.target.value)}/>)
                      :(userDetail.username)}
                  </td>
                  <td>
                    {editField === "username"?(
                      <>
                        <a style={{ color: "green", cursor: "pointer" }} onClick={handleSaveClick}>Save</a> |{" "}
                        <a style={{ color: "orange", cursor: "pointer" }} onClick={handleCancelClick}>Cancel</a>
                      </>
                    ):(
                      <a style={{ color: "blue", cursor: "pointer" }} onClick={() => handleEditClick("username")}>Edit</a>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Mobile</td>
                  <td>
                    {editField === "mobile"?(
                      <input type="text" class="form-control" value={editValue} 
                      onChange={(e) => setEditValue(e.target.value)}/>)
                      :(userDetail.mobile)}
                  </td>
                  <td>
                    {editField === "mobile"?(
                      <>
                        <a style={{ color: "green", cursor: "pointer" }} onClick={handleSaveClick}>Save</a> |{" "}
                        <a style={{ color: "orange", cursor: "pointer" }} onClick={handleCancelClick}>Cancel</a>
                      </>
                    ):(
                      <a style={{ color: "blue", cursor: "pointer" }} onClick={() => handleEditClick("mobile")}>Edit</a>
                    )}
                  </td>
                </tr>

              </table>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default EditProfile;