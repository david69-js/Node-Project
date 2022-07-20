import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { getAllTasks } from "../redux/actions/taskAction";
import TaskComponent  from './taskComponent';


const TaskListing = () => {
    const dispatch = useDispatch();
    
    const AllTasks = async () => {
      const response = await axios.get('http://localhost:5000/api/get-tasks')
      .catch((error) => {console.log(error);});
      dispatch(getAllTasks(response.data.allNotes))
    }
    useEffect(() => {
        AllTasks();
    }, [])

    return (
        <div className="container mx-auto mt-10">
           <TaskComponent/>
        </div>
    );
}

export default TaskListing;
