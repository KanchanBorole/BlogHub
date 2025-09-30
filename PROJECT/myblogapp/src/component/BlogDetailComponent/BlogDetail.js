import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogDetail(){
 
   const {id}= useParams();
   const [blogDetail, setBlogDetail]= useState(null);
    const [message, setMessage]=useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/blog/fetch?_id=${id}`)
            .then(res => setBlogDetail(res.data[0]))
            .catch(err => {
                console.error("Blog fetch error:", err);
                setMessage("Blog not found");
            });
    }, [id]);

    if (message) return <p className="text-danger">{message}</p>;
    if (!blogDetail) return <p>Loading...</p>;

    return(
        <>
           
    <section className="breadcrumb breadcrumb_bg align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-sm-6">
                        <div className="breadcrumb_tittle text-left">
                            <h2>Blog Detail</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* blog content */}
        <section className="blog_area single-post-area all_post section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 posts-list">
                        <div className="single-post">
                            <div className="feature-img">
                                <img 
                                    className="img-fluid" 
                                    src={`/assets/uploads/blogimages/${blogDetail.imagenm}`} 
                                    alt="Blog Visual" 
                                    style={{"height":"500px", "width":"100%"}}
                                />
                            </div>
                            <div className="blog_details">
                                <h2>{blogDetail.title}</h2>
                                <ul className="blog-info-link mt-3 mb-4">
                                    <li>
                                        <a href="#"><i className="far fa-user"></i> {blogDetail.category}</a>
                                    </li>
                                </ul>
                                <p className="excert">{blogDetail.content.slice(0, 1000)}</p>

                                <div className="quote-wrapper mt-4">
                                    <div className="quotes">
                                        “{blogDetail.content.slice(0, 150)}...”
                                    </div>
                                </div>
                                 <p className="excert">{blogDetail.content.slice(1000, 4000)}</p>
                            </div>
                        </div>

                        <div className="blog-author mt-5">
                            <div className="media align-items-center">
                                <div className="media-body">
                                    <a href="#"><h4>{blogDetail.bloggername}</h4></a>
                                    <p>Posted on {new Date(blogDetail.info).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
   
        </>
    )
}

export default BlogDetail;