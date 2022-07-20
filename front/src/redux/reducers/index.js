import { combineReducers } from "redux";
import { userReducer,selectUserReducer } from "./userReducer";
import { authReducer } from "./authReducer";
import { GetTasksReducer, SelectTakReducer} from './taskReducer'

const reducers = combineReducers({
    allUSers: userReducer,
    user: selectUserReducer,
    authReducer: authReducer,
    GetTasksReducer: GetTasksReducer,
    SelectTakReducer : SelectTakReducer 
});

export default reducers;