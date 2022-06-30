import axios from 'axios';
import { loginUser  } from '../redux/actions/authAction';
export const Login_User = async (user, dispatch)  => {
    try{
        const response = await axios({
            url: 'http://localhost:5000/api/login',
            method: 'POST',
            headers: { "Content-type": "application/json" },
            data: JSON.stringify(user)
        })
        localStorage.setItem("token", response.data.token);
        dispatch(loginUser(response.data.token));

    }catch(err){
        console.log(err);
    }

}