import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './css/Todo.css';
import axios from 'axios';

export const Todo = () => {

    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [checkPost, setCheckPost] = useState(0)

    useEffect(() => {
        const localToken = localStorage.getItem('authToken')
        const getTodo = () => {
            axios.get('https://my-gs-server.herokuapp.com/api/posts/todos',
                {
                    headers: {
                        "authToken": localToken
                    }
                }
            )
                .then(res => {
                    setTodos(res.data);
                })
                .catch(error => alert(error));
        }
        getTodo()
    }, [checkPost])

    // useEffect(() => {
    // }, [todos, status]) // chay. function khi todos/ status thay doi

    return (
        <div className="todo-container">
            <TodoForm inputText={inputText} todos={todos} setCheckPost={setCheckPost} checkPost={checkPost}
                setInputText={setInputText} setStatus={setStatus} status={status} />
            <TodoList todos={todos} checkPost={checkPost} setCheckPost={setCheckPost} />
        </div>
    );
}