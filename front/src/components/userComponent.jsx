import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const UserComponent = () => {
  const users = useSelector((state) => state.allUSers.users);

  return (
     <>
      {users.map((user, index) => {
            return(
              <Link  key={index} to={`/user/${user._id}`}>
                <div className="card w-80 border-4 border-gray-600 p-6">
                  <h3 className="card-title">Username is: {user.name}</h3>
                  <p className="card-body">email is:{user.email} </p>
                </div>
            </Link> 
            )
          }
        )
      }
      <Link to='/login'>Login</Link><br />
      <Link to='/register'>Register</Link>
    </>
  )
}

export default UserComponent;