import React from 'react';
import { TbDots } from 'react-icons/tb';
import { BsCheckCircleFill } from "react-icons/bs";

import './assets/TaskItem.css'

export default function TaskItem(props) {
    return (
        <div className='task-item'>
            <div className='name'>
                {props.taskItem.name}
            </div>
            <hr />
            <div className='progress'>
                <div className='progress-count'>
                    <div className='progress-bar'>
                        {props.taskItem.progress_percentage < 100 ? 
                            <div className='progress-color' style={{width: props.taskItem.progress_percentage + '%'}}>
                            </div>
                            :
                            <div className='progress-color-done'>
                            </div>
                        }
                    </div>
                    {props.taskItem.progress_percentage < 100 ? 
                        <div className='progress-percent'>
                            {props.taskItem.progress_percentage}%
                        </div>
                        :
                        <div className='progress-percent-done'>
                            <BsCheckCircleFill size={16} color="#43936C"/>
                        </div>
                    }
                    
                </div>
                <div className='setting'>
                    <TbDots size={24}></TbDots>
                </div>
            </div>
        </div>
    );
}