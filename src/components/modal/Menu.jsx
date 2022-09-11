import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { show } from './../../redux/deleteModalSlice'
import { showEdit } from './../../redux/editModalSlice'
import { setCurrTaskItem } from '../../redux/currTaskItem';
import { setCurrTodo } from '../../redux/currTodo';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb'
import { BiEditAlt, BiTrash } from 'react-icons/bi'

import './assets/Menu.css'

import ItemService from './../../services/ItemService'

export default function Menu(props) {
    const todoList = useSelector((state) => state.todoList.value)
    const dispatch = useDispatch()
    const index = todoList.map(object => object.id).indexOf(props.todoId);

    function moveRight(e) {
        let newIndex = index + 1
        let todoTargetId = todoList[newIndex].id
        e.preventDefault();

        try {
            const task = {
                target_todo_id: todoTargetId
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

    function moveLeft(e) {
        let newIndex = index - 1
        let todoTargetId = todoList[newIndex].id
        e.preventDefault();

        try {
            const task = {
                target_todo_id: todoTargetId
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

    function deleteTask(taskID, todoId) {
        dispatch(show())
        dispatch(setCurrTaskItem(taskID))
        dispatch(setCurrTodo(todoId))
    }

    function editTask(taskID, todoId) {
        dispatch(showEdit())
        dispatch(setCurrTaskItem(taskID))
        dispatch(setCurrTodo(todoId))
    }

    return (
        <div className='menu-modal'>
            <div className='menu-container'>
                {index !== (todoList.length - 1)  ? 
                    <div className='menu-item move-right' onClick={(e) => moveRight(e)}>
                        <div className='icon'>
                            <TbArrowRight size={24}></TbArrowRight>
                        </div>
                        <div className='text'>
                            Move Right
                        </div>
                    </div>
                :
                    null
                }
                {index !== 0 ? 
                    <div className='menu-item move-left' onClick={(e) => moveLeft(e)}>
                        <div className='icon'>
                            <TbArrowLeft size={24}></TbArrowLeft>
                        </div>
                        <div className='text'>
                            Move Left
                        </div>
                    </div>
                :
                    null
                }
                <div className='menu-item edit' onClick={() => editTask(props.taskItemID, props.todoId)}>
                    <div className='icon'>
                        <BiEditAlt size={24}></BiEditAlt>
                    </div>
                    <div className='text'>
                        Edit
                    </div>
                </div>
                <div className='menu-item delete' onClick={() => deleteTask(props.taskItemID, props.todoId)}>
                    <div className='icon'>
                        <BiTrash size={24}></BiTrash>
                    </div>
                    <div className='text'>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}