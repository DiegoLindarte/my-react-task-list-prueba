import React, { useRef, useState } from "react";
import { BiSolidCommentEdit } from 'react-icons/bi';
import { useForm } from "../hooks/useForm";

export const TaskListUpdate = ({tasklist, handleUpdateTaskList}) => {

    const {updateDescription, onInputChange} = useForm({
        updateDescription: tasklist.description
    });

    const [disabled, setDisabled] = useState(true)
    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
        e.preventDefault()

        const id = tasklist.id
        const description = updateDescription

        handleUpdateTaskList(id, description)

        setDisabled(!disabled)

        focusInputRef.current.focus()

    }

    return (
        <form onSubmit={onSubmitUpdate}>
            <input 
                type='text'
                className={`input-update ${
                    tasklist.done ? 'text-decoration-dashed' : ''
                }`}
                name='updateDescription'
                value={updateDescription}
                onChange={onInputChange}
                placeholder='Que hay pa hacer?'
                readOnly={disabled}
                ref={focusInputRef}

            />
            <button className="btn-edit" type='submit'>
                <BiSolidCommentEdit/>
            </button>
        </form>
    );
};