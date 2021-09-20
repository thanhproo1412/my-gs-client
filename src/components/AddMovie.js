import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import './../App.css';
import {MovieContext} from './MovieContext';

export const AddMovie = () => {
    
    const submitIcon = <FontAwesomeIcon icon={faCheckSquare} />

    const [movies,setMovies] = useContext(MovieContext);
    const [name,setName] = useState(['']);
    const [itemCardUrl,setItemCardUrl] = useState(['']);
    const [ngayPhatHanh,setNgayPhatHanh] = useState(['']);
    const [price,setPrice] = useState(['']);
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }
    const updateItemCardUrl = (e) => {
        setItemCardUrl(e.target.value);
    }
    const updateNgayPhatHanh = (e) => {
        setNgayPhatHanh(e.target.value);
    }
    const addMovie = (e) => {
        e.preventDefault(); // ngăn trang refresh
        setMovies(prevMovies =>[...prevMovies, {name: name, price: price,
             ngayPhatHanh: ngayPhatHanh, itemCardUrl: itemCardUrl}]);
    }

    return (
        <form className="search-form" onSubmit={addMovie}>
            <input className="search-input" type="text" placeholder="name" value={name} onChange={updateName} />
            <input className="search-input" type="text" placeholder="price" value={price} onChange={updatePrice} />
            <input className="search-input" type="text" placeholder="Link hinh anh" value={itemCardUrl} onChange={updateItemCardUrl} />
            <input className="search-input" type="text" placeholder="Ngay Phat Hanh" value={ngayPhatHanh} onChange={updateNgayPhatHanh} />
            <button className="search-button" type="submit">{submitIcon}</button>
        </form>
        
    );
}