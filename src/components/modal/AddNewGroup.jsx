import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'

import './assets/AddNewGroup.css'

import TodoService from '../../services/TodoService'

export default function AddNewGroup({ setIsOpen }) {
    const [groupName, setGroupName] = useState("");
    const [groupDesc, setGroupDesc] = useState("");

    function saveGroup(e){
        e.preventDefault();

        try {
            const todo = {
                title: groupName,
                description: groupDesc
            }
    
            TodoService.createTodo(todo)
                .then(() => {
                    window.location.reload();            
                })
                .catch(() => {});
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='add-new-modal centered'>
            <div className='head'>
                <div className='title'>
                    Add New Group
                </div>
                <div className='close' onClick={() => setIsOpen(false)}>
                    <IoClose size={24}></IoClose>
                </div>
            </div>
            <div className='body'>
                <div className='form'>
                    <div className='name'>
                        <div className='title'>Group Name</div>
                        <div className='input-field-name'>
                            <input id='input-group-name' placeholder='Type your Group Name' type ="text" onChange={(e) => setGroupName(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='desc'>
                        <div className='title'>Description</div>
                        <div className='input-field-desc'>
                            <input id='input-desc' placeholder='Type your Description' type ="text" onChange={(e) => setGroupDesc(e.target.value)}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <button className='cancel' onClick={() => setIsOpen(false)}>
                    <div className='text'>Cancel</div>
                </button>
                <button className='save' onClick={(e) => saveGroup(e)}>
                    <div className='text'>Save Group</div>
                </button>
            </div>
        </div>
    );
}