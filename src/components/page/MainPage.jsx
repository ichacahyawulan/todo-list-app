import React, { useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import TaskContainer from './../task/TaskContainer';

import './assets/MainPage.css'

import AddNewGroup from '../modal/AddNewGroup';

export default function MainPage() {
    const [isNewGroupOpen, setIsNewGroupOpen] = useState(false);

    return (
        <div id='main-page'>
            <div className='header'>
                <div className='menu'>
                    <div className='right-side'>
                        <div className='heading'>
                            <h1>Product Roadmap</h1>
                            <button onClick={() => setIsNewGroupOpen(true)}>
                                <TiPlus className='icon' color='white'></TiPlus>
                                <p>Add New Group</p>
                            </button>
                            {isNewGroupOpen && <AddNewGroup setIsOpen={setIsNewGroupOpen} />}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <TaskContainer></TaskContainer>
        </div>
    );
}