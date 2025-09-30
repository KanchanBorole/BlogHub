import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function Logout(){
    const navigate= useNavigate();

   useEffect(()=>{
    localStorage.removeItem('_id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('mobile');
    localStorage.removeItem('gender');
    localStorage.removeItem('status');
    localStorage.removeItem('role');
    localStorage.removeItem('info');

    navigate('/');
   });

   return(
     <></>
   )
}

export default Logout;