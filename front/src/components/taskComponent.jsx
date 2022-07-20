import React from 'react';
import { useSelector } from 'react-redux';
const TaskComponent = () => {
    const tasks = useSelector((state) => state.GetTasksReducer.tasks);
    return (
        <div>
            {
            tasks.map((task, index) => {
                return(
                <a  key={index} to={`/task/${task._id}`}>
                    <div className="card w-80 border-4 border-gray-600 p-6">
                    <h3 className="card-title">task title is: {task.task}</h3>
                    <p className="card-body">tasks description is: {task.description}</p>
                    </div>
                </a> 
                )
            })
            }
        </div>
    );
}

export default TaskComponent;
