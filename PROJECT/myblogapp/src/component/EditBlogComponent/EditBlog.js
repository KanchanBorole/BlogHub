import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [editField, setEditField] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/blog/fetch?_id=" + id)
      .then(res => {
        if (res.data.length > 0) {
          setBlog(res.data[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleEditClick = (field) => {
    setEditField(field);
    setEditValue(blog[field]);
  };

  const handleCancelClick = () => {
    setEditField("");
    setEditValue("");
  };

  const handleSaveClick = () => {
    if (editValue.trim() === "") {
      alert("Field cannot be empty");
      return;
    }

    const updateDetail = {
      condition_obj: { _id: id },
      content_obj: { [editField]: editValue }
    };

    axios.patch("http://localhost:3001/blog/update", updateDetail)
      .then(res => {
        alert("Updated successfully");
        setBlog({ ...blog, [editField]: editValue });
        setEditField("");
        setEditValue("");
      })
      .catch(err => {
        console.error("Update error", err);
        alert("Update failed");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit Blog</h2>
      <table className="table table-bordered">
        <tbody>
          {["title", "category", "content"].map((field, i) => (
            <tr key={i}>
              <td>{field}</td>
              <td>
                {editField === field ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="form-control"
                  />
                ) : (
                  blog[field]
                )}
              </td>
              <td>
                {editField === field ? (
                  <>
                    <button className="btn btn-success btn-sm me-2" onClick={handleSaveClick}>Save</button>
                    <button className="btn btn-warning btn-sm" onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <button className="btn btn-primary btn-sm" style={{"background":"orange","border":"none"}} onClick={() => handleEditClick(field)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a><button className="btn btn-sm" style={{"background":"orange","border":"none","color":"white"}}><Link to="/myblog" style={{"color":"white"}}>Back to My blogs</Link></button></a>
    </div>
  );
}

export default EditBlog;
