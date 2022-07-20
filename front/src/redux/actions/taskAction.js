import { ActionTypes } from '../contants/action-types';

export const getAllTasks = (tasks) =>{
    return{
        type: ActionTypes.GET_ALL_TASKS,
		payload: tasks
    }
}
export const selectTaks = (task) =>{
	return {
		type: ActionTypes.SELECT_TASK,
		payload: task
	}
}