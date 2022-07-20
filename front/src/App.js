import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDetails from "./components/userDetail";
import UserListing from "./components/userListing";
import { LoadUser } from './redux/actions/authAction'
import HomeUser from "./components/HomeUser";
import PrivateRoutes from "./hooks/PrivateRoutes";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  const [isAuthenticated , setIsAuthenticated ] = useState(false);

  useEffect(() => {
     LoadUser(dispatch, token);
     if (token)return setIsAuthenticated(true);
      setIsAuthenticated(false);
    }, [dispatch, token])
  return (
    <div>
        <Header/>
        <Routes>
          <Route element={<PrivateRoutes isAuth={isAuthenticated} to="/login" />}>
            <Route exact path='/user/:userId' element={<UserDetails/>}/>
            <Route exact path='/home-user/:userId' element={<HomeUser/>}/> 
            <Route exact path='/' element={<UserListing />}/>
          </Route>
          <Route element={<PrivateRoutes isAuth={!isAuthenticated} to="/" />}>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
          </Route>
        
          <Route>404 not found</Route>
        </Routes>
    </div>
  );
}

export default App;
