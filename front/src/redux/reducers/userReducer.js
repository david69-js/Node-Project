import {ActionTypes} from '../contants/action-types';
const initialState = {
        users: [],
}

export const userReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_USERS:
            return {...state, users:payload};
        default:
            return state;        
    };
}
export const selectUserReducer = (state ={}, {type, payload}) =>{
    switch(type){
        case ActionTypes.SELECT_USER:
            return {...state, ...payload};
        default:
            return state;        
    };
}