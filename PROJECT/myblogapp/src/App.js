import './App.css';
import Header from './component/HeaderComponent/Header';
import About from './component/AboutComponent/About';
import Footer from './component/FooterComponent/Footer';
import {Route, Routes} from 'react-router-dom';
import Blog from './component/BlogsComponent/Blog';
import Contact from './component/ContactComponent/Contact';
import Home from './component/HomeComponent/Home';
import BlogDetail from './component/BlogDetailComponent/BlogDetail';
import TravelCategory from './component/TravelCategoryComponent/TravelCategory';
import EducationalCategory from './component/EducationalCategoryComponent copy/EducationalCategory';
import FashionCategory from './component/FashionCategoryComponent copy 4/FashionCategory';
import FoodCategory from './component/FoodCategoryComponent copy 3/FoodCategory';
import HealthCareCategory from './component/HealthCareCategoryComponent copy 5/HealthCareCategory';
import SelfHelpCategory from './component/SelfHelpCategoryComponent copy 2/SelfHelpCategory';
import Register from './component/RegisterComponent/Register';
import Login from './component/LoginComponent/Login';
import Logout from './component/LogoutComponent/Logout';
import ManageBloggers from './component/ManageBloggersComponent/ManageBloggers';
import ManageBlog from './component/ManageBlogComponent/ManageBlog';
import MyBlog from './component/MyBlogComponent/MyBlog';
import AddBlog from './component/AddBlogComponent/AddBlog';
import ChangePassword from './component/ProfileComponent/ChangepPassword';
import EditProfile from './component/ProfileComponent/EditProfile';
import EditBlog from './component/EditBlogComponent/EditBlog';

function App() {
  return (
    <>
     <Header/> 

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/blogdetail/:id" element={<BlogDetail/>}></Route>
      <Route path="/travelcategory" element={<TravelCategory/>}></Route>
      <Route path="/educationalcategory" element={<EducationalCategory/>}></Route>
      <Route path="/fashioncategory" element={<FashionCategory/>}></Route>
      <Route path="/foodcategory" element={<FoodCategory/>}></Route>
      <Route path="/helthcarecategory" element={<HealthCareCategory/>}></Route>
      <Route path="/selfhelpcategory" element={<SelfHelpCategory/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/manageblog" element={<ManageBlog/>}></Route>
      <Route path="/managebloggers" element={<ManageBloggers/>}></Route>
      <Route path="/myblog" element={<MyBlog/>}></Route>
      <Route path="/addblog" element={<AddBlog/>}></Route>
      <Route path="/editprofile" element={<EditProfile/>}></Route>
      <Route path="/changepassword" element={<ChangePassword/>}></Route>
      <Route path="/editblog/:id" element={<EditBlog/>}></Route>
     </Routes>

     <Footer/>

    </>
  );
}

export default App;
