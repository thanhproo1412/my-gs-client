import React from 'react';
import './css/TodoForm.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export const TodoForm = ({ setInputText, checkPost, setCheckPost, inputText, setStatus, status }) => {

    const addIcon = <FontAwesomeIcon icon={faPlusCircle} />

    const postTodo = () => {
        console.log(inputText)
        axios.post('http://localhost:3001/api/posttodos',{
            todo:inputText,
            todoDone:'1',
        })
        .then(() => {
            alert('success')
            setCheckPost(checkPost+1)
        })
        .catch(err => console.log(err));
    }

    const inputTextHandler = event => {
        setInputText(event.target.value);
    }
    const submitTodoHandler = (e) => {
        postTodo()
        e.preventDefault();
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
        if (status === 'completed'){
            setStatus(0)
        }
        if (status === 'uncompleted'){
            setStatus(1)
        }
        console.log(status)
    }

    return (
        <div className="todo-container">
            <Container fluid="md">
                <form className="todo-form">
                    <input value={inputText} onChange={inputTextHandler} type="text" id="fname" name="firstname" placeholder="Want to do something..." />
                    <select onChange={statusHandler} id="todoDone" name="status">
                        <option value="all">All</option>
                        <option value="completed">Đã xong</option>
                        <option value="uncompleted">Chưa xong</option>
                    </select>
                    <button onClick={submitTodoHandler} type="submit">{addIcon}</button>
                </form>
            </Container>
        </div>
    );
}