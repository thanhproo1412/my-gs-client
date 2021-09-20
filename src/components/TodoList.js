import React, { useEffect, useState } from 'react';
import './css/TodoList.css';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, checkPost, setCheckPost }) => {

    return (
        <div className="todo-container">
            {todos.map(todo => (
                <TodoItem checkPost={checkPost} setCheckPost={setCheckPost}
                    id={todo.id} key={todo.id} text={todo.todo} completed={todo.todoDone} />
            ))}
        </div>
    );
}