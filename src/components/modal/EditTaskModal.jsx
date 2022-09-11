import React from 'react';
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { hideEdit } from './../../redux/editModalSlice'

import './assets/EditTaskModal.css'

export default function EditTaskModal(props) {
    const dispatch = useDispatch()

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
                <button className='cancel' onClick={() => dispatch(hideEdit())}>
                    <div className='text'>Cancel</div>
                </button>
                <button className='save'>
                    <div className='text'>Save Task</div>
                </button>
            </div>
        </div>
    );
}