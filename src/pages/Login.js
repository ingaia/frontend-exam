import React from "react";
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom";

const Login = ({history}) => {
  const onClick = () => history.push('library')
  return (
    <div className={'login'}>
      <img src='./assets/logo_dark.png' alt='witcher logo'/>
      <div className='form-login'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Button onClick={onClick}>Login</Button>
      </div>
    </div>)
}

export default withRouter(Login);
