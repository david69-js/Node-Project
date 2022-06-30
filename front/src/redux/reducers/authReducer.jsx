import {ActionTypes} from '../contants/action-types';
import jwt_decode from 'jwt-decode';
const initialState = {
    token: localStorage.getItem('token'),
    name: null,
    _id: null,
}
export const authReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.LOAD_USER:
        case ActionTypes.REGISTER_USER:
        case ActionTypes.LOGIN_USER:
            const user = jwt_decode(payload);
            return {
                ...state,
                token: payload,
                name: user.name,
                _id: user.id,
            };
        case ActionTypes.LOGOUT_USER:
            localStorage.removeItem("token");
            return {
                token: null,
                name: null,
                _id: null,
            };
        default:
            return state;        
    };
}

