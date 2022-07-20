import { ActionTypes } from '../contants/action-types';
export const registerUser = (user) =>{
	return {
		type: ActionTypes.REGISTER_USER,
		payload: user
	}
}
export const loginUser = (user) =>{
	return {
		type: ActionTypes.LOGIN_USER,
		payload: user
	}
}

export const LoadUser = () =>{
	return(dispatch, getState) => {
		const token = getState().authReducer.token;
		if(token){
			dispatch({
				type: ActionTypes.LOAD_USER,
				token: token
			})
		}else return null;
	}
}
export const logoutUser = (token) => {
	return {
		type: ActionTypes.LOGOUT_USER,
		payload: token
	}
  };