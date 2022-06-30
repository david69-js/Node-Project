import { combineReducers } from "redux";
import { userReducer,selectUserReducer } from "./userReducer";
import { authReducer } from "./authReducer";


const reducers = combineReducers({
    allUSers: userReducer,
    user: selectUserReducer,
    authReducer: authReducer
   
});

export default reducers;