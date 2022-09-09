import React from 'react';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb'
import { BiEditAlt, BiTrash } from 'react-icons/bi'

import './assets/Menu.css'

export default function Menu(props) {
    return (
        <div className='menu-modal'>
            <div className='menu-container'>
                <div className='menu-item move-right'>
                    <div className='icon'>
                        <TbArrowRight size={24}></TbArrowRight>
                    </div>
                    <div className='text'>
                        Move Right
                    </div>
                </div>
                <div className='menu-item move-left'>
                    <div className='icon'>
                        <TbArrowLeft size={24}></TbArrowLeft>
                    </div>
                    <div className='text'>
                        Move Left
                    </div>
                </div>
                <div className='menu-item edit'>
                    <div className='icon'>
                        <BiEditAlt size={24}></BiEditAlt>
                    </div>
                    <div className='text'>
                        Edit
                    </div>
                </div>
                <div className='menu-item delete'>
                    <div className='icon'>
                        <BiTrash size={24}></BiTrash>
                    </div>
                    <div className='text'>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}