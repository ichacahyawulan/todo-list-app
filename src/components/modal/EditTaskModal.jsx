import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { hideEdit } from './../../redux/editModalSlice'

import './assets/CreateEditTaskModal.css'
import './assets/EditTaskModal.css'

import ItemService from './../../services/ItemService'

export default function EditTaskModal(props) {
    const [taskName, setTaskName] = useState("");
    const [taskProgress, setTaskProgress] = useState("");
    const dispatch = useDispatch()

    function editTask(e){
        e.preventDefault();

        try {
            const task = {
                target_todo_id: props.todoId,
                name: taskName,
                progress_percentage: taskProgress
            }

            ItemService.updateTodoItem(props.todoId, props.taskItemID, task)
                .then(() => {
                    window.location.reload();            
                })
                .catch(() => {});
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='edit-modal centered'>
            <div className='head'>
                <div className='title'>
                    Edit Task
                </div>
                <div className='close' onClick={() => dispatch(hideEdit())}>
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
                <button className='cancel' onClick={() => dispatch(hideEdit())}>
                    <div className='text'>Cancel</div>
                </button>
                <button className='save' onClick={(e) => editTask(e)}>
                    <div className='text'>Save Task</div>
                </button>
            </div>
        </div>
    );
}