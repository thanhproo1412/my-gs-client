import React from 'react';
import './App.css'
import { MoviesList } from './components/MoviesList';
import DanhSachSanPham from './components/DanhSachSanPham';
import { MovieProvider } from './components/MovieContext';
import { Image164 } from './components/components/CustomStyle';

export const ListSanPham = () => {
    return (
        <div className='my-background-grey'>
        <div className="listsanpham-banner">
            <Image164 alt='' src={process.env.PUBLIC_URL + "/imgs/background/ga-ran-gi.jpg"} />
        </div>
            <MovieProvider className='my-background-white'>
                <MoviesList />
                <DanhSachSanPham />
            </MovieProvider>
        </div>
    );
}