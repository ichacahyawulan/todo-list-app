import React from 'react';
import { HiOutlineExclamation } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { hide } from './../../redux/deleteModalSlice'

import './assets/DeleteModal.css'

import ItemService from './../../services/ItemService'

export default function DeleteModal(props) {
    const dispatch = useDispatch()

    function deleteTask(e){
        e.preventDefault();

        try {
            ItemService.deleteTodoItem(props.todoId, props.taskItemID)
                .then(() => {
                    window.location.reload();            
                })
                .catch(() => {});
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='delete-modal centered'>
            <div className='head'>
                <div className='exclamation'>
                    <HiOutlineExclamation size={24}></HiOutlineExclamation>
                </div>
                <div className='delete-title'>
                    Delete Modal
                </div>
                <div className='close' onClick={() => dispatch(hide())}>
                    <IoClose size={24}></IoClose>
                </div>
            </div>
            <div className='body'>
            Are you sure want to delete this task? your action can’t be reverted.
            </div>
            <div className='foot'>
                <button className='cancel' onClick={() => dispatch(hide())}>
                    <div className='text'>Cancel</div>
                </button>
                <button className='delete' onClick={(e) => deleteTask(e)}>
                    <div className='text'>Delete</div>
                </button>
            </div>
        </div>
    );
}