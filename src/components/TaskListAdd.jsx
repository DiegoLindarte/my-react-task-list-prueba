import React from "react";
import { useForm } from "../hooks/useForm";

export const TaskListAdd = ({handleNewTaskList}) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = e => {
        e.preventDefault()

        if(description.length <= 1) return

        let newTaskList = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };

        handleNewTaskList(newTaskList);
        onResetForm();

    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type='text'
                className='input-add'
                name='description'
                value={description}
                onChange={onInputChange}
                placeholder='Que hay pa hacer?'

            />
            <button className="btn-add" type='submit'>
                Agregar
            </button>
        </form>
    );  
};
