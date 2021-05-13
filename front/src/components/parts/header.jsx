import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {MenuItem, NavStyle } from '../style-components/components'
import  Register from '../auth/register'
import Login from '../auth/login';
import Home from '../main/home';
import Profile from '../profile/profile'
const Header = () => {
    return(
    <div className="App">
<Router>
    <NavStyle>
            <ul>
               <div className="d-flex"> 
                <MenuItem>
                    <Link to='/login'>Login</Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/register'>Register</Link>
                </MenuItem>
                </div>
               <div className="d-flex">
               <MenuItem>
                    <Link to='/'>Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/profile'>Profile</Link>
                </MenuItem>
               </div>
            </ul>
    </NavStyle>
        <Switch>
            <Route path='/login'exact>
            <Login/>
            </Route>
            <Route path='/register'exact>
            <Register/>
            </Route>
            <Route path='/'exact>
            <Home/>
            </Route>
            <Route path='/profile'exact>
            <Profile/>
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default Header;
