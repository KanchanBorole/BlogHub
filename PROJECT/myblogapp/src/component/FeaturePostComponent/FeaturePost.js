import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

function Blog(){
   
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/blog/fetch")
            .then(res => setBlogs(res.data))
            .catch(err => console.error("Failed to load blogs", err));
    }, []);

    return (
        <>
        <section className="all_post section_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-lg-6 col-sm-6 mb-4">
              <div className="single_post post_1">
                <div className="single_post_img">
                  <img
                    src={`/assets/uploads/blogimages/${blog.imagenm}`}
                    alt="Blog"
                    className="img-fluid"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="single_post_text text-center p-2">
                  <Link to={`/blogdetail/${blog._id}`}>
                    <h5>{blog.category}</h5>
                    <h2>{blog.title}</h2>
                  </Link>
                  <p>Posted on {new Date(blog.info).toLocaleDateString()}</p>
                  <p>Posted by {blog.bloggername}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="page_pageniation mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="sidebar_widget">
          <div className="single_sidebar_wiget">
            <div className="sidebar_tittle">
              <h3>Categories</h3>
            </div>
            <div className="single_catagory_item category">
              <ul className="list-unstyled">
                <li><a><Link to="/travelcategory">Travel</Link></a></li>
                <li><a><Link to="/educationalcategory">Educational</Link></a> </li>
                <li><a><Link to="/foodcategory">Food</Link></a> </li>
                <li><a><Link to="/selfhelpcategory">Self-Help</Link></a></li>
                <li><a><Link to="/healthcarecategory">Healthcare</Link></a></li>
                <li><a><Link to="/fashioncateogry">Fashion</Link></a> </li>
              </ul>
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

export default Blog;