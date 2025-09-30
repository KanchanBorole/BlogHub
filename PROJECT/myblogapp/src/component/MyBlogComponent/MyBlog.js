import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function MyBlog(){

    const [blogDetail, setBlogDetail]= useState([]);
    const [message, setMessage]=useState("");

   

    useEffect(() => {
    const name = localStorage.getItem("name");
    console.log("Logged-in blogger name:", name); 

    if (!name) {
        setMessage("Blogger not logged in.");
        return;
    }

    const url = `http://localhost:3001/blog/fetch?bloggername=${name}`;
    console.log("API URL:", url); 

    axios.get(url)
        .then(res => {
            setBlogDetail(res.data);
            setMessage("");
        })
        .catch(err => {
            console.error("Error fetching blogs:", err); 
            setMessage("No blogs found or failed to fetch.");
        });
}, []);

    return(
        <>
        <section>
       <div className="container mt-5">
            <h2>My Blogs</h2>
            <p style={{ color: "red" }}>{message}</p>

            {blogDetail.map((blog, index) => (
                <div key={index} className="card mb-3">
                    <img 
                        src={`/assets/uploads/blogimages/${blog.imagenm}`} 
                        className="card-img-top" 
                        alt="Blog Visual" 
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                    <div className="card-body" >
                        <h5 className="card-title"><Link to={`/blogdetail/${blog._id}`} style={{"color":"black", "fontWeight":"bold"}}>{blog.title}</Link></h5>
                        <p className="card-text"><strong>Category:</strong> {blog.category}</p>
                        <p className="card-text">{blog.content.slice(0, 150)}...</p>
                        <p className="card-text"><small className="text-muted">Posted by {blog.bloggername} on {new Date(blog.info).toLocaleString()}</small></p>
                        <p><Link to={`/editblog/${blog._id}`} style={{"color":"orange"}}>EditBlog</Link></p>
                        
                    </div>
                </div>
            ))}
        </div> 
        </section>
        </>
    )
}

export default MyBlog;