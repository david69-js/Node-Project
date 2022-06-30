import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setUsers } from "../redux/actions/userActions";
import UserComponent  from './userComponent';


const UserListing = () => {
    const dispatch = useDispatch();
    
    const getAllUsers = async () => {
      const response = await axios.get('http://localhost:5000/api/get-users')
      .catch((error) => {console.log(error);});
      dispatch(setUsers(response.data.allUser));
    }
    useEffect(() => {
      getAllUsers();
    }, [])

    return (
        <div className="container mx-auto mt-10">
            <UserComponent/>
        </div>
    );
}

export default UserListing;
