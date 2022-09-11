import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import { COLOR } from '../../constant/colors';

import './assets/TaskContainer.css'

import TodoService from '../../services/TodoService';

export default function TaskContainer() {
    const [taskList, setTaskList] = useState([]);
    const colors = [COLOR.primary, COLOR.secondary, COLOR.danger, COLOR.succes]

    useEffect(() => {
        getTodo()
    }, []);

    function getTodo(){
        try {    
            TodoService.getListTodo().then((res) => {
                switch (res.status) {
                    case 200:
                        setTaskList(res.data)
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
        <div className='container'>
            {taskList.map((task, i) => (
                <TaskCard key={i} color={colors[(i%colors.length)]} task={task}></TaskCard>
            ))}
        </div>
    );
}