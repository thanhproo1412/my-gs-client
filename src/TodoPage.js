import React from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Redirect } from 'react-router-dom'

export const TodoPage = ({ authorized }) => {

    if (authorized = false) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <Todo />
        </div >)
}