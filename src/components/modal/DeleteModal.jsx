import React from 'react';
import { HiOutlineExclamation } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

import './assets/DeleteModal.css'

export default function DeleteModal(props) {
    return (
        <div className='delete-modal'>
            <div className='head-body'>
                <div className='head'>
                    <div className='exclamation'>
                        <HiOutlineExclamation size={24}></HiOutlineExclamation>
                    </div>
                    <div className='delete-title'>
                        Delete Modal
                    </div>
                    <div className='close'>
                        <IoClose size={24}></IoClose>
                    </div>
                </div>
                <div className='body'>
                Are you sure want to delete this task? your action can’t be reverted.
                </div>
            </div>
            <div className='foot'>
                <button className='cancel'>
                    <div className='text'>Cancel</div>
                </button>
                <button className='delete'>
                    <div className='text'>Delete</div>
                </button>
            </div>
        </div>
    );
}