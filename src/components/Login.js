import React, { useState } from 'react';
import './css/Login_Register.css';
import { MyButton1 } from './components/CustomStyle';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getUsername = event => {
        setUsername(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }

    const login = () => {
        axios.post('http://localhost:3001/api/login', {
            username: username,
            password: password,
        })
            .then(() => {
                alert('đăng kí thành công')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="login-site">
            <Container className='mt-5 mb-5 d-flex justify-content-center'>
                <form className='form-login'>
                    <h1 className='login-form-title'>Login</h1>
                    <div className="form-row">
                        <label for="email">Email</label>
                        <input onChange={getUsername} type="email" name="email" autocomplete="off" placeholder="Your Email" />
                    </div>
                    <div className="form-row">
                        <label for="password">Password</label>
                        <input onChange={getPassword} type="password" name="password" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <MyButton1 onClick={login}>Login</MyButton1>
                    </div>
                </form>
            </Container>
        </div>
    );
}