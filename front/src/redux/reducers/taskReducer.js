import {ActionTypes} from '../contants/action-types';
const initialState = {
        tasks: [],
}

export const GetTasksReducer = (state= initialState, {type ,payload}) =>{
    switch(type){
        case ActionTypes.GET_ALL_TASKS:
            return {...state, tasks: payload};
        default:
            return state;        
    };
}

export const SelectTakReducer = (state ={}, {type, payload}) =>{
    switch(type){
        case ActionTypes.SELECT_TASK:
            return {...state,...payload};
        default:
            return state;
        }
}
