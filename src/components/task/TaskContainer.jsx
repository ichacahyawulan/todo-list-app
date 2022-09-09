import React from 'react';
import TaskCard from './TaskCard';
import { COLOR } from '../../values/colors';

import './assets/TaskContainer.css'

export default function TaskContainer() {
    const colors = [COLOR.primary, COLOR.secondary, COLOR.danger, COLOR.succes]
    const taskList = [
        {
            "title": "Group Task 1",
            "description": "January - March"
        },
        {
            "title": "Group Task 2",
            "description": "April - June"
        },
        {
            "title": "Group Task 3",
            "description": "July - September"
        },
        {
            "title": "Group Task 4",
            "description": "October - Desember"
        },
        {
            "title": "Group Task 5",
            "description": "Lorem ipsum dolor"
        }
    ]

    return (
        <div className='container'>
            {taskList.map((task, i) => (
                <TaskCard color={colors[(i%colors.length)]} task={task}></TaskCard>
            ))}
        </div>
    );
}