import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
	<footer class="footer-area">
		<div class="container">
			<div class="row">
				<div class="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
					<h4>About us</h4>
					<p>We also empower writers and creators to publish and manage their own blogs easily through our intuitive dashboard — making content creation simple, smart, and scalable.</p>
				</div>
				<div class="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
					<h4>Contact Info</h4>
					<ul>
						<li><p>Address :Indore, Madhya Pradesh, India</p></li>
						<li><p>Phone : +91 96950-11111</p></li>
						<li><p>Email : myblogs@gmail.com</p></li>
					</ul>
				</div>
				<div class="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
					<h4>Important Links</h4>
					<ul>
                        <li><a><Link to="/">Home</Link></a></li>
						<li><a><Link to="/blog">Explore Blogs</Link></a></li>
						<li><a><Link to="/contact">Contact info</Link></a></li>
						<li><a><Link to="/about">About us</Link></a></li>
					</ul>
				</div>
				<div class="col-xl-3 col-lg-6 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
					<h4>Start Blogging</h4>
					<ul>
						<li><a><Link to="/register">Register</Link></a></li>
						<li><a><Link to="/login">Login</Link></a></li>
					</ul>
					
				</div>
			</div>
			<div class="copyright_text">
				<div class="row align-items-center">
					<div class="col-lg-8">
						
					</div>
					<div class="col-lg-4 text-center text-lg-right">
						<div class="footer-social">
							<a ><i class="ti-facebook"></i></a>
							<a > <i class="ti-twitter"></i> </a>
							<a ><i class="ti-instagram"></i></a>
							<a ><i class="ti-skype"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    {/* footer part end*/}
        </>
    )
} 
export default Footer;