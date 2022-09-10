import React from 'react';

import './assets/SignUpPage.css'

export default function SignUpPage(props) {
    return (
        <div className='signup-page'>
            <div className='head'>
                <div className='title'>
                    Sign Up
                </div>
            </div>
            <div className='body'>
                <div className='form'>
                    <div className='name'>
                        <div className='title'>Name</div>
                        <div className='input-field-name'>
                            <input id='input-signup-name' placeholder='Type your name' type ="text"></input>
                        </div>
                    </div>
                    <div className='email'>
                        <div className='title'>E-mail</div>
                        <div className='input-field-email'>
                            <input id='input-signup-email' placeholder='Type your e-mail' type ="text"></input>
                        </div>
                    </div>
                    <div className='pass'>
                        <div className='title'>Password</div>
                        <div className='input-field-pass'>
                            <input id='input-signup-pass' placeholder='Type your password' type ="text"></input>
                        </div>
                    </div>
                    <div className='pass-confirm'>
                        <div className='title'>Password Confirmation</div>
                        <div className='input-field-pass-confirm'>
                            <input id='input-signup-pass-confirm' placeholder='Retype your password' type ="text"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <button className='signup-button'>
                    <div className='text'>Sign Up</div>
                </button>
                <div className='back-login'>
                    <div className='text'>
                        Have an account?
                        <button className='go-to-login'>
                            <div className='text'>Login</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}