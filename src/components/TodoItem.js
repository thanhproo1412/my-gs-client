import React, { useEffect, useState } from 'react';
import './css/TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export const TodoItem = ({ completed, text, key, id, checkPost, setCheckPost }) => {

    const localToken = localStorage.getItem('authToken')
    const deleleHandler = () => {
        axios.delete('https://my-gs-server.herokuapp.com/api/posts/todos/delete',
        {
            headers: {
                "authToken": localToken
            }
        },{
            id : id
        })
        setCheckPost(checkPost + 1)
    }
    const completeHandler = () => {
        const done = Math.abs(completed - 1)  // Math.abs : gia tri tuyet doi
        console.log(done)
        axios.put('https://my-gs-server.herokuapp.com/api/posts/todos/done',
            {
                headers: {
                    "authToken": localToken
                }
            }
            , {
                id: id,
                todoDone: done
            })
    }

    return (
        <div className="todo-container">
            <div className='todo-list'>
                <li className={`todo-item ${(completed == 0) ? ' completed' : ' '}`}>{text}{key}</li>
                <button onClick={completeHandler} className='complete-btn'>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </button>
                <button onClick={deleleHandler} className='trash-btn'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
}