import React from 'react';
import { IoClose } from 'react-icons/io5'

import './assets/AddNewGroup.css'

export default function AddNewGroup(props) {
    return (
        <div className='add-new-modal'>
            <div className='head'>
                <div className='title'>
                    Add New Group
                </div>
                <div className='close'>
                    <IoClose size={24}></IoClose>
                </div>
            </div>
            <div className='body'>
                <div className='form'>
                    <div className='name'>
                        <div className='title'>Group Name</div>
                        <div className='input-field-name'>
                            <input id='input-group-name' placeholder='Type your Group Name' type ="text"></input>
                        </div>
                    </div>
                    <div className='desc'>
                        <div className='title'>Description</div>
                        <div className='input-field-desc'>
                            <input id='input-desc' placeholder='Type your Description' type ="text"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <button className='cancel'>
                    <div className='text'>Cancel</div>
                </button>
                <button className='save'>
                    <div className='text'>Save Group</div>
                </button>
            </div>
        </div>
    );
}