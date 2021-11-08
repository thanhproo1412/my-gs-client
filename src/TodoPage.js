import React from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Navigate  } from 'react-router-dom'

export const TodoPage = ({ authorized }) => {

    if (!authorized) {
        return <Navigate  to='/login' />
    }
    return (
        <div>
            <Todo />
        </div >)
}