import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectedUser } from "../redux/actions/userActions";

const UserDetails = () => {
  const {name, email, password} = useSelector(state => state.user)
  const {userId} = useParams();
  const dispatch = useDispatch();
  const getSigleUser = async () => {
    const response = await axios.get(`http://localhost:5000/api/user/${userId}`)
    .catch((error) => {console.log(error);});
    dispatch(selectedUser(response.data.user));
  }
  useEffect(() => {
    if (userId && userId !== '') getSigleUser(); 
  }, [userId])
  return (
    <div className=" container mx-auto w-auto ">
      <div className="card border-4 border-gray-600 p-6">
      <h1>User Details</h1>
        <h2>My name is: <strong>{name}</strong></h2>
        <h2>My email is: <strong>{email}</strong></h2>
        <h2>My password is: <strong>{password}</strong></h2>
        
      </div>
    <Link  to='/'>Come back Home</Link> 
   </div>
  )
}

export default UserDetails;