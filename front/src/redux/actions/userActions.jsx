import {ActionTypes}  from '../contants/action-types';
export const setUsers = (users) =>{
	return {
		type: ActionTypes.SET_USERS,
		payload: users
	}
}

export const selectedUser = (user) =>{
	return {
		type: ActionTypes.SELECT_USER,
		payload: user
	}
}