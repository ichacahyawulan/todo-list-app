import React from 'react';

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
        </div>
    );
}