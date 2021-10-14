import React, { useState } from 'react';
import './css/Login_Register.css';
import { MyButton1 } from './components/CustomStyle';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const Register = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getEmail = event => {
        setEmail(event.target.value);
    }
    const getUsername = event => {
        setUsername(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }

    const postRegister = () => {
        axios.post('http://localhost:3001/api/user/register', {
            email: email,
            username: username,
            password: password,
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => alert(err));
    }

    const register = (e) => {
        console.log('aaaaaaaaaaaaa')
        postRegister()
        e.preventDefault()
    }

    return (
        <div className="login-site">
            <Container className='mt-5 mb-5 d-flex justify-content-center'>
                <form className='form-login'>
                    <h1 className='login-form-title'>Đăng Kí</h1>
                    <div className="form-row">
                        <label for="email">Email</label>
                        <input onChange={getEmail} type="email" 
                        name="email" placeholder="Your Email" />
                    </div>
                    <div className="form-row">
                        <label for="username">Tên đăng nhập</label>
                        <input value={username} onChange={getUsername} type="email" 
                        name="email" autocomplete="off" placeholder="Tên đăng nhập" />
                    </div>
                    <div className="form-row">
                        <label for="password">Mật khẩu</label>
                        <input value={password} onChange={getPassword} type="password" name="password" />
                    </div>
                    <div className="form-button-right">
                        <a href='/#' className="login-form-link">Quên mật khẩu?</a>
                    </div>
                    <div className="form-button-center">
                        <div>
                            <MyButton1 onClick={register}>Đăng kí</MyButton1>
                        </div>
                        <a href='/#' className="login-form-link">Đăng nhập</a>
                    </div>
                </form>
            </Container>
        </div>
    );
}