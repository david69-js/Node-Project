import { Routes, Route, Navigate } from "react-router-dom";
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDetails from "./components/userDetail";
import UserListing from "./components/userListing";
import { LoadUser } from './redux/actions/authAction'


function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  useEffect(() => {
     LoadUser(dispatch, token);
    }, [dispatch])
  return (
    <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<UserListing />}/>
          <Route exact path='/user/:userId' element={<UserDetails/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route>404 not found</Route>
        </Routes>
    </div>
  );
}

export default App;
