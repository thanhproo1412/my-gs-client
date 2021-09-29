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

    // const [filteredTodos, setFilteredTodos] = useState([])

    const getTodo = () => {
        axios.get('https://my-gs-server.herokuapp.com/api/posts/todos',
            {
                headers: {
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ0M2M3OTE4N2I2ZDM3YjcwYzgzMjgiLCJpYXQiOjE2MzE4NjM2Mjd9.b4SSPt7pFo4dTdgHERj13UOUlwJ22Zwmq7-SVVYSM_o"
                }
            }
        )
            .then(res => {
                setTodos(res.data);
            })
            .catch(error => alert(error));
    }

    useEffect(() => {
        getTodo()
    }, [checkPost])

    // useEffect(() => {
    // }, [todos, status]) // chay. function khi todos/ status thay doi

    return (
        <div className="todo-container">
            <TodoForm inputText={inputText} todos={todos} setCheckPost={setCheckPost} checkPost={checkPost}
                setInputText={setInputText} setStatus={setStatus} />
            <TodoList todos={todos} checkPost={checkPost} setCheckPost={setCheckPost} />
        </div>
    );
}