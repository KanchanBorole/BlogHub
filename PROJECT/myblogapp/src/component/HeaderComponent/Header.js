import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Header()
{
    const [headContent, setHeadContent] = useState();

    useEffect(()=>{
        if(localStorage.getItem('role')=="blogger")
        {
            setHeadContent(
                <>
                   {/*::header part start::*/}
    <header class="main_menu">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" >Blog Hub</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse main-menu-item justify-content-center"
                            id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" ><Link to="/">Home</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"><Link to="/myblog">MyBlog</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to="/addblog">AddBlog</Link></a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Profile
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item"><Link to="/editprofile">EditProfile</Link></a>
                                        <a class="dropdown-item" ><Link to="/changepassword">ChangePassword</Link></a>
                                        
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to="/logout">Logout</Link></a>
                                </li>
                            </ul>
                        </div>
                        <div class="header_social_icon d-none d-lg-block">
                            <ul>
                                
                                <li><a  class="d-none d-lg-block"><i class="ti-facebook"></i></a></li>
                                <li><a  class="d-none d-lg-block"> <i class="ti-twitter-alt"></i></a></li>
                                <li><a  class="d-none d-lg-block"><i class="ti-instagram"></i></a></li>
                                <li><a  class="d-none d-lg-block"><i class="ti-skype"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* Header part end*/}
                </>
            );
        }
        else if(localStorage.getItem('role')=="admin")
        {
            setHeadContent(
                <>
                   {/*::header part start::*/}
    <header class="main_menu">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" >Blog Hub</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse main-menu-item justify-content-center"
                            id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" ><Link to="/">Home</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"><Link to="/manageblog">ManageBlog</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to="/managebloggers">ManageBloggers</Link></a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Profile
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item"><Link to="/editprofile">EditProfile</Link></a>
                                        <a class="dropdown-item" ><Link to="/changepassword">ChangePassword</Link></a>
                                        
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to="/logout">Logout</Link></a>
                                </li>
                            </ul>
                        </div>
                        <div class="header_social_icon d-none d-lg-block">
                            <ul>
                                
                                <li><a  class="d-none d-lg-block"><i class="ti-facebook"></i></a></li>
                                <li><a  class="d-none d-lg-block"> <i class="ti-twitter-alt"></i></a></li>
                                <li><a  class="d-none d-lg-block"><i class="ti-instagram"></i></a></li>
                                <li><a  class="d-none d-lg-block"><i class="ti-skype"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* Header part end*/}
                </>
            );
        }
        else
        {
            setHeadContent(
                <>
                    {/*::header part start::*/}
    <header class="main_menu">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" >Blog Hub</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse main-menu-item justify-content-center"
                            id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" ><Link to="/">Home</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"><Link to="/blog">Blog</Link></a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item"><Link to="/travelcategory">Travel</Link></a>
                                        <a class="dropdown-item" ><Link to="/educationalcategory">Educational</Link></a>
                                        <a class="dropdown-item" ><Link to="/selfhelpcategory">Self-Help</Link></a>
                                        <a class="dropdown-item" ><Link to="/foodcategory">Food</Link></a>
                                        <a class="dropdown-item" ><Link to="/fashioncategory">Fashion</Link></a>
                                        <a class="dropdown-item" ><Link to="/healthcarecategory">Health-Care</Link></a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to="/about">About</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to="/contact">Contact</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to="/register">Register</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to="/login">Login</Link></a>
                                </li>
                            </ul>
                        </div>
                        <div class="header_social_icon d-none d-lg-block">
                            <ul>
                                
                                <li><a  class="d-none d-lg-block"><i class="ti-facebook"></i></a></li>
                                <li><a  class="d-none d-lg-block"> <i class="ti-twitter-alt"></i></a></li>
                                <li><a  class="d-none d-lg-block"><i class="ti-instagram"></i></a></li>
                                <li><a  class="d-none d-lg-block"><i class="ti-skype"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* Header part end*/}
                </>
            )
        }
    },[]);

    return(
        <>
           {headContent} 
        </>
    )
}

export default Header;