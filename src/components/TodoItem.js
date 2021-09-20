import React, { useEffect, useState } from 'react';
import './css/TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export const TodoItem = ({ completed, text, key, id, checkPost, setCheckPost }) => {

    const deleleHandler = () => {
        axios.delete(`http://localhost:3001/api/deletetodos/${id}`)
        setCheckPost(checkPost+1)
    }
    const completeHandler = () => {
        const done = Math.abs(completed-1)  // Math.abs : gia tri tuyet doi
        console.log(done)
        axios.put('http://localhost:3001/api/updatetodos',{
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