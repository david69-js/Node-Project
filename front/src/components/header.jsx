import React from 'react';
import { NavLink, useNavigate  } from "react-router-dom";
import { useDispatch} from "react-redux";
import { logoutUser } from '../redux/actions/authAction';

const Header = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
   let removeItem = localStorage.removeItem('token'); 
   dispatch(logoutUser(removeItem));
  }
  return (
    <div className="header menu-header border-4 border-b-indigo-500 container">
       <ul className="nav list-none flex justify-around my-3">
        <li>
          <NavLink 
            activeclassname="navbar__link--active"
            className="navbar__link" to="/">Home</NavLink>
          </li>
          <li>
            <button 
              activeclassname="navbar__link--active"
              className={`navbar__link `} onClick={() => handleSignOut()}>SignOut</button>
          </li>
          <li>
            <NavLink 
              activeclassname="navbar__link--active"
              className={`navbar__link `} to="/login">Sign In</NavLink>
          </li>
          <li>
            <NavLink 
              activeclassname="navbar__link--active"
              className={`navbar__link `} to="/register">Sign Up</NavLink>
          </li>
       </ul>
    </div>
  );
}

export default Header;
