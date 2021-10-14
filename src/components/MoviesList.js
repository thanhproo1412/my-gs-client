import React, { useContext } from 'react';
import ItemCard from './components/ItemCard';
import './../App.css';
import { MovieContext } from './MovieContext';

export const MoviesList = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <React.Fragment>
            <h1 className='text-center mt-5'>Danh sách sản phẩm</h1>
            <div className='myRow'>
                {movies.map(movie => (
                    <ItemCard name={movie.name} itemCardUrl={movie.itemCardUrl} ngayPhatHanh={movie.ngayPhatHanh}
                        gioPhatHanh={movie.gioPhatHanh} muiGioPhatHanh={movie.muiGioPhatHanh}
                        itemCardHoverInfo={movie.itemCardHoverInfo} itemCardHoverLink={movie.itemCardHoverLink}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}