import React, { useState } from "react";

import logo from '../../assets/logo_dark.png'
import './styles.css'

export default function Login({history}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handlerSubmit(event){
        event.preventDefault();

        history.push('/dashboard');
    }
    
    function validateForm() {
       return email.length > 0 && password.length > 0;
    }
  
    
    return (
        <>
        <div className="content" >
            <div className="logo" >
                <img src={logo} alt="The Witcher"/>
            </div>

            <div className="form__wrapper" >
                <form onSubmit={handlerSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input
                                autoFocus
                                type="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        
                        </li>
                        <li>
                            <label htmlFor="email">Password</label>
                            <input
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                type="password"
                            />
                        </li>
                        <li>
                            <div className="button__form">
                                <button
                                    className="btn__default"
                                    disabled={!validateForm()}
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        </>
    )
    
}
