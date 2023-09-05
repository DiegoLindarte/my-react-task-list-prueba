import { useEffect, useReducer } from "react"
import {taskListReducer} from "../tasklistreducer"

export const useTaskList = () => {

    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('tasklists')) || []
    }

    const [tasklists, dispatch] = useReducer(
        taskListReducer,
         initialState,
          init
          );

    const taskListsCount = tasklists.length
    const pendingTaskListsCount = tasklists.filter(tasklist => !tasklist.done).length

    useEffect(() => {
            localStorage.setItem('tasklists', JSON.stringify(tasklists))
          }, [tasklists])

    const handleNewTaskList = tasklist => {
        const action = {
            type: "Add TaskList",
            payload: "tasklist",
        };

        dispatch(action);
    };

    const handleDeleteTaskList = id => {
        const action = {
            type: "Delete TaskList",
            payload: id,
        };

        dispatch(action);
    };

    const handleCompleteTaskList = id => {
        const action = {
            type: "Complete TaskList",
            payload: id
        };

        dispatch(action);

    };

    const handleUpdateTaskList = (id, description) => {
        const action = {
            type: 'Update TaskList',
            payload: {
                id,
                description,
            },
        };

        dispatch(action);

    };

    return{
        tasklists,
        taskListsCount,
        pendingTaskListsCount,
        handleNewTaskList,
        handleDeleteTaskList,
        handleCompleteTaskList,
        handleUpdateTaskList
    }

};

