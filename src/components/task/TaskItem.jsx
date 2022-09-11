import React from 'react';
import { TbDots } from 'react-icons/tb';
import { BsCheckCircleFill } from "react-icons/bs";

import './assets/TaskItem.css'

import Menu from '../modal/Menu';

export default function TaskItem(props) {
    function settingFunction(id) {
        console.log(id)
        document.getElementById(id).classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.setting-button')) {
            var dropdowns = document.getElementsByClassName("setting-menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <div className='task-item'>
            {props.taskItemFound ? 
                <div className='task'>
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
                            <button className='setting-button' onClick={() => settingFunction('task-' + props.taskItem.id)}>
                                <i><TbDots size={24}></TbDots></i>
                            </button>
                            <div id={'task-' + props.taskItem.id} className='setting-menu'>
                                <Menu />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='no-task'>
                    No Task
                </div>
            }
        </div>
    );
}