import axios from 'axios';
import { registerUser } from '../redux/actions/authAction';
export const Register_User = async (user, dispatch)  => {
    try{
        const response = await axios({
            url: 'http://localhost:5000/api/register',
            method: 'POST',
            headers: { "Content-type": "application/json" },
            data: JSON.stringify(user)
        })
        localStorage.setItem("token", response.data.accessToken);
        dispatch(registerUser(response.data.accessToken));
        
       
    }catch(err){
        console.log(err);
    }

}