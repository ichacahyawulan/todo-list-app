import React from 'react';
import { TbCirclePlus } from 'react-icons/tb';
import TaskItem from './TaskItem';

import './assets/TaskCard.css'

export default function TaskCard(props) {
    const main = props.color.main
    const border = props.color.border
    const surface = props.color.surface

    return (
        <div className='task-card' style={{ background: surface, borderColor: border }}>
            <div className='label' style={{ background: surface, borderColor: border }}>
                <div className='text' style={{ color: main }}>{props.task.title}</div>
            </div>
            <div className='desc'>{props.task.description}</div>
            <TaskItem></TaskItem>
            <TaskItem></TaskItem>
            <div className='new-task'>
                <div className='icon'>
                    <TbCirclePlus size={20}></TbCirclePlus>
                </div>
                <div className='text'>New Task</div>
            </div>
        </div>
    );
}