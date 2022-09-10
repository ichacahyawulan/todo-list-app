import React from 'react';

import './assets/LoginPage.css'

export default function LoginPage() {
    return (
        <div id='container-login'>
            <div className='login-page'>
                <div className='head'>
                    <div className='title'>
                        Login
                    </div>
                </div>
                <div className='body'>
                    <div className='form'>
                        <div className='email'>
                            <div className='title'>E-mail</div>
                            <div className='input-field-email'>
                                <input id='input-login-email' placeholder='Type your e-mail' type ="text"></input>
                            </div>
                        </div>
                        <div className='pass'>
                            <div className='title'>Password</div>
                            <div className='input-field-pass'>
                                <input id='input-login-pass' placeholder='Type your password' type ="text"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foot'>
                    <button className='login-button'>
                        <div className='text'>Login</div>
                    </button>
                    <div className='create-acc'>
                        <div className='text'>
                            Don’t have an account yet?
                            <button className='go-to-signup'>
                                <div className='text'>Sign Up</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}