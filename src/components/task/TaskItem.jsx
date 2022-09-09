import React from 'react';
import { TbDots } from 'react-icons/tb';

import './assets/TaskItem.css'

export default function TaskItem(props) {
    return (
        <div className='task-item'>
            <div className='name'>
                Re-designed the zero-g doggie bags. No more spills!
            </div>
            <hr />
            <div className='progress'>
                <div className='progress-count'>
                    <div className='progress-bar'>
                        <div className='progress-color'>
                        </div>
                    </div>
                    <div className='progress-percent'>
                        30%
                    </div>
                </div>
                <div className='setting'>
                    <TbDots size={24}></TbDots>
                </div>
            </div>
        </div>
    );
}