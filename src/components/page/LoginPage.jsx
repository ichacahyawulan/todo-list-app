import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './assets/LoginPage.css'

import UserService from '../../services/UserService';

export default function LoginPage() {
    const navigate = useNavigate();
    const [userEmail, setEmail] = useState("");
    const [userPass, setPass] = useState("");

    function submitLogin(e){
        e.preventDefault();

        try {
            const user = {
                email: userEmail,
                password: userPass
            }
    
            UserService.login(user).then((res) => {
                switch (res.status) {
                    case 200:
                        localStorage.removeItem("user");
                        localStorage.setItem("user", JSON.stringify(res.data));
                        navigate('/v1');
                        break;
                    case 401:
                        alert('Please input valid data.')
                        break;
                    case 500:
                        alert('Something went wrong.')
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
                                <input id='input-login-email' placeholder='Type your e-mail' type ="text" onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='pass'>
                            <div className='title'>Password</div>
                            <div className='input-field-pass'>
                                <input id='input-login-pass' placeholder='Type your password' type ="password" onChange={(e) => setPass(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foot'>
                    <button className='login-button' onClick={(e) => submitLogin(e)}>
                        <div className='text'>Login</div>
                    </button>
                    <div className='create-acc'>
                        <div className='text'>
                            Don’t have an account yet?
                            <button className='go-to-signup' onClick={() => navigate('/v1/signup')}>
                                <div className='text'>Sign Up</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}