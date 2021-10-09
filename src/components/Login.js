import React, { useState } from 'react';
import './css/Login_Register.css';
import { MyButton1 } from './components/CustomStyle';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Login = () => {

    const history = useHistory()
    // const getToken = localStorage.getItem('authToken')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const getUsername = event => {
        setUsername(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }

    const login = () => {
        axios.post('https://my-gs-server.herokuapp.com/api/user/login',
            {
                username: username,
                password: password,
            })
            .then((res) => {
                localStorage.setItem('authToken', res.data)
                history.replace('/')
                window.location.reload(); 
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="login-site">
            <Container className='mt-5 mb-5 d-flex justify-content-center'>
                <form className='form-login'>
                    <h1 className='login-form-title'>Login</h1>
                    <div className="form-row">
                        <label for="Username">Username</label>
                        <input onChange={getUsername} type="Username" name="Username" placeholder='admin123' />
                    </div>
                    <div className="form-row">
                        <label for="password">Password</label>
                        <input onChange={getPassword} type="password" name="password" placeholder='admin123' />
                    </div>
                    <div className="d-flex justify-content-center">
                        <MyButton1 onClick={login}>Login</MyButton1>
                    </div>
                </form>
            </Container>
        </div>
    );
}