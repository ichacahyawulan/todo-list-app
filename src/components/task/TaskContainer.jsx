import React from 'react';
import TaskCard from './TaskCard';
import { COLOR } from '../../constant/colors';

import './assets/TaskContainer.css'

export default function TaskContainer() {
    const colors = [COLOR.primary, COLOR.secondary, COLOR.danger, COLOR.succes]
    const taskList = [
        {
            "id": 1,
            "title": "Group Task 1",
            "description": "January - March"
        },
        {
            "id": 2,
            "title": "Group Task 2",
            "description": "April - June"
        },
        {
            "id": 3,
            "title": "Group Task 3",
            "description": "July - September"
        },
        {
            "id": 4,
            "title": "Group Task 4",
            "description": "October - Desember"
        },
        {
            "id": 5,
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