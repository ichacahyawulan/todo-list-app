import React, { useState, useEffect } from 'react';
import { TbCirclePlus } from 'react-icons/tb';
import TaskItem from './TaskItem';

import './assets/TaskCard.css'

import ItemService from '../../services/ItemService';

export default function TaskCard(props) {
    const [taskItem, setTaskItem] = useState([]);
    const main = props.color.main
    const border = props.color.border
    const surface = props.color.surface

    useEffect(() => {
        getItem()
    }, []);

    function getItem(){
        try {
            ItemService.getTodoItem(props.task.id).then((res) => {
                switch (res.status) {
                    case 200:
                        setTaskItem(res.data)
                        break;
                    case 500:
                        alert('Terjadi kesalahan.')
                        break;
                    default:
                        break
                }                
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='task-card' style={{ background: surface, borderColor: border }}>
            <div className='label' style={{ background: surface, borderColor: border }}>
                <div className='text' style={{ color: main }}>{props.task.title}</div>
            </div>
            <div className='desc'>{props.task.description}</div>
            {taskItem.map((task, i) => (
                <TaskItem key={i} taskItem={task}></TaskItem>
            ))}
            <div className='new-task'>
                <div className='icon'>
                    <TbCirclePlus size={20}></TbCirclePlus>
                </div>
                <div className='text'>New Task</div>
            </div>
        </div>
    );
}