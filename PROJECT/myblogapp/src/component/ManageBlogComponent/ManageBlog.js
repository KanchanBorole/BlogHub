import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManageBlog(){
    const navigate= useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/blog/fetch")
            .then(res => setBlogs(res.data))
            .catch(err => console.error("Failed to load blogs", err));
    }, []);

    const HandleDelete=(blog)=>{
        var deleteDetail={"blogdata":{blog}};
           axios.delete("http://localhost:3001/blog/delete",deleteDetail).then((reponse)=>{
              alert("blog deleted successfully");
              navigate("/manageblog");
           }).catch((err)=>{
              console.log(err);
           });
    }

    return (
        <>
        {/* Breadcrumb Section */}
        <section className="breadcrumb breadcrumb_bg align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-sm-6">
                        <div className="breadcrumb_tittle text-left">
                            <h2>Blogs</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="breadcrumb_content text-right">
                            <p>Home<span>/</span>Blogs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="all_post section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            
                            {blogs.map((blog, index) => (
                                <div key={index} className="card col-lg-3 col-sm-6 mb-4" style={{"margin":"4px","padding":"2px"}}>
                                    <div className="single_post post_1">
                                        <div className="single_post_img">
                                            <img 
                                                src={`/assets/uploads/blogimages/${blog.imagenm}`} 
                                                alt="Blog" 
                                                className="img-fluid"
                                                style={{ height: "200px", objectFit: "cover", width: "100%" }}
                                            />
                                        </div>
                                        <div className="single_post_text text-center p-2 " style={{"height":"40%"}}>
                                            <Link to={`/blogdetail/${blog._id}`}>
                                                <h5>{blog.category}</h5>
                                                <h2>{blog.title}</h2>
                                            </Link>
                                            <p>Posted on {new Date(blog.info).toLocaleDateString()}</p>
                                            {<a style={{"color":"red"}} onClick={()=>{HandleDelete(blog,'delete')}}>Delete</a>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>

                        <div className="page_pageniation mt-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     

    
        </>
    )
}
 
export default ManageBlog; 