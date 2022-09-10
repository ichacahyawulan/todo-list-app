import React from 'react';
import { TiPlus } from 'react-icons/ti';
import TaskContainer from './../task/TaskContainer';

import './assets/MainPage.css'

export default function MainPage() {

    return (
        <div id='main-page'>
            <div className='header'>
                <div className='menu'>
                    <div className='right-side'>
                        <div className='heading'>
                            <h1>Product Roadmap</h1>
                            <button>
                                <TiPlus className='icon' color='white'></TiPlus>
                                <p>Add New Group</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <TaskContainer></TaskContainer>
        </div>
    );
}