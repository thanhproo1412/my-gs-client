import React,{useContext} from 'react';
import { MovieContext } from './MovieContext';
import './../App.css'


export const NewMovie = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className='centerDiv'>
            <h1>So luong phim moi trong thang : {movies.length}</h1>
            <a className='myLink' href='/listSanPham'>Xem phim moi ngay</a>
        </div>
    );
}