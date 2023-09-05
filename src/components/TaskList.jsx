import React from "react";
import { TaskListItem } from "./TaskListItem";

export const TaskList = ({
    tasklists,
    handleUpdateTaskList,
    handleDeleteTaskList,
    handleCompleteTaskList,
}) => {
    return (
        <ul>
            {tasklists.map(tasklist => (
                <TaskListItem
                key={tasklist.id}
                tasklist={tasklist}
                handleUpdateTaskList={handleUpdateTaskList}
                handleDeleteTaskList={handleDeleteTaskList}
                handleCompleteTaskList={handleCompleteTaskList}
            />
            ))}
            
        </ul>
    );
};

