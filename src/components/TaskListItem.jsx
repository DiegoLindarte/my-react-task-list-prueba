import React from "react";
import { RiChatDeleteFill } from 'react-icons/ri';
import { TaskListUpdate } from './TaskListUpdate';

export const TaskListItem = ({
    tasklist,
    handleUpdateTaskList,
    handleDeleteTaskList,
    handleCompleteTaskList,
}) => {
    return (
        <li>
            <span onClick={() => handleCompleteTaskList(tasklist.id)}>
                <label
                 className={`container-done ${tasklist.done ? 'active' : ''}`}
                 ></label>
            </span>
            <TaskListUpdate tasklist={tasklist} handleUpdateTaskList={handleUpdateTaskList} />
            <button
            className="btn-delete"
            onClick={() => handleDeleteTaskList(tasklist.id)}
            >
                <RiChatDeleteFill/>
            </button>
        </li>
    );
};
