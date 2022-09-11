import React from 'react';
import { IoClose } from 'react-icons/io5'

import './assets/CreateEditTaskModal.css'

export default function EditTaskModal(props) {
    return (
        <div className='form-modal'>
            <div className='head'>
                <div className='title'>
                    Edit Task
                </div>
                <div className='close'>
                    <IoClose size={24}></IoClose>
                </div>
            </div>
            <div className='body'>
                <div className='form'>
                    <div className='name'>
                        <div className='title'>Task Name</div>
                        <div className='input-field-name'>
                            <input id='input-name' placeholder='Type your Task' type ="text"></input>
                        </div>
                    </div>
                    <div className='progress'>
                        <div className='title'>Progress</div>
                        <div className='input-field-progress'>
                            <input id='input-progress' placeholder='70%' type ="text"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <button className='cancel'>
                    <div className='text'>Cancel</div>
                </button>
                <button className='save'>
                    <div className='text'>Save Task</div>
                </button>
            </div>
        </div>
    );
}