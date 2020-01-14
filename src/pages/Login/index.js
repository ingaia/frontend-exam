import React, { useState } from 'react';

import InputText from '../../components/InputText';

import './style.less';
import logo_dark from '../../../assets/logo_dark.png';
import Button from '../../components/Button';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <div className="login">
            <div className="box-login">
                <img className="logo" src={logo_dark} alt=""/>
                <form onSubmit={handleSubmit} name="formLogin" className="form-login">
                    <InputText type="email" name="email" label="Email" 
                        value={email} onChange={event => setEmail(event.target.value)} required={true}/>
                    <InputText type="password" name="password" label="Password" 
                        value={password} onChange={event => setPassword(event.target.value)} required={true}/>
                    <Button type="submit" label="LOGIN" />
                </form>
            </div>
        </div>
    )
}