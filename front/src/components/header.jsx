import React, {useEffect, useState} from 'react';
import { NavLink, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { logoutUser } from '../redux/actions/authAction';
import jwt_decode from 'jwt-decode';

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  const [isAuthenticated , setIsAuthenticated ] = useState(false);
  const user = token ? jwt_decode(token) : null; 
  const navigate = useNavigate();
  const handleSignOut = () => {
   let removeItem = localStorage.removeItem('token'); 
   dispatch(logoutUser(removeItem));
   navigate('/')
  }
  useEffect(() => {
    if (token)return setIsAuthenticated(true);
    setIsAuthenticated(false);
  }, [token])
  
  return (
    <div className="header menu-header border-4 border-b-indigo-500 container">
       <ul className="nav list-none flex justify-around my-3">
        {isAuthenticated ? (
          <><li>
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
              className={`navbar__link `} to={`/home-user/${user ? user.id : ''}`}>Home User</NavLink>
          </li></>
        ): null

        }
          {!isAuthenticated ? (
            <>
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
            </>
          ): null
            
          }
       </ul>
    </div>
  );
}

export default Header;
