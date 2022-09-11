import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'

import './assets/CreateEditTaskModal.css'
import './assets/CreateTaskModal.css'

import ItemService from './../../services/ItemService'

export default function CreateTaskModal({ setIsOpen, todoId }) {
    const [taskName, setTaskName] = useState("");
    const [taskProgress, setTaskProgress] = useState("");

    function saveTask(e){
        e.preventDefault();

        try {
            const task = {
                name: taskName,
                progress_percentage: taskProgress
            }
    
            ItemService.createTodoItem(todoId, task)
                .then(() => {
                    window.location.reload();            
                })
                .catch(() => {});
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='create-modal centered'>
            <div className='head'>
                <div className='title'>
                    Create Task
                </div>
                <div className='close' onClick={() => setIsOpen(false)}>
                    <IoClose size={24}></IoClose>
                </div>
            </div>
            <div className='body'>
                <div className='form'>
                    <div className='name'>
                        <div className='title'>Task Name</div>
                        <div className='input-field-name'>
                            <input id='input-name' placeholder='Type your Task' type ="text" onChange={(e) => setTaskName(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='progress'>
                        <div className='title'>Progress</div>
                        <div className='input-field-progress'>
                            <input id='input-progress' placeholder='70%' type ="text" onChange={(e) => setTaskProgress(e.target.value)}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <button className='cancel' onClick={() => setIsOpen(false)}>
                    <div className='text'>Cancel</div>
                </button>
                <button className='save' onClick={(e) => saveTask(e)}>
                    <div className='text'>Save Task</div>
                </button>
            </div>
        </div>
    );
}