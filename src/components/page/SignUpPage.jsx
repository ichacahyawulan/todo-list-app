import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './assets/SignUpPage.css'

import UserService from '../../services/UserService';

export default function SignUpPage() {
    const navigate = useNavigate();
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPass, setPass] = useState("");
    const [userPassConf, setPassConf] = useState("");

    function submitSignUp(e){
        e.preventDefault();

        try {
            const user = {
                name: userName,
                email: userEmail,
                password: userPass,
                password_confirmation: userPassConf
            }
    
            UserService.signup(user).then((res) => {
                switch (res.status) {
                    case 201:
                        console.log(res.data)
                        localStorage.removeItem("user");
                        localStorage.setItem("user", JSON.stringify(res.data));
                        navigate('/');
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
        <div className='container-signup'>
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
                                <input id='input-signup-name' placeholder='Type your name' type ="text" onChange={(e) => setName(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='email'>
                            <div className='title'>E-mail</div>
                            <div className='input-field-email'>
                                <input id='input-signup-email' placeholder='Type your e-mail' type ="text" onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='pass'>
                            <div className='title'>Password</div>
                            <div className='input-field-pass'>
                                <input id='input-signup-pass' placeholder='Type your password' type ="password" onChange={(e) => setPass(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='pass-confirm'>
                            <div className='title'>Password Confirmation</div>
                            <div className='input-field-pass-confirm'>
                                <input id='input-signup-pass-confirm' placeholder='Retype your password' type ="password" onChange={(e) => setPassConf(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foot'>
                    <button className='signup-button' onClick={(e) => submitSignUp(e)}>
                        <div className='text'>Sign Up</div>
                    </button>
                    <div className='back-login'>
                        <div className='text'>
                            Have an account?
                            <button className='go-to-login' onClick={() => navigate('/login')}>
                                <div className='text'>Login</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}