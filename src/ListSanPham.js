import React from 'react';
import './App.css'
import { MoviesList } from './components/MoviesList';
import DanhSachSanPham from './components/DanhSachSanPham';
import { MovieProvider } from './components/MovieContext';

export const ListSanPham = () => {
    return (
        <MovieProvider>
            <div className="listsanpham-banner">
                <img src={process.env.PUBLIC_URL + "images/background/ga-ran-gi.jpg"} alt="" />
            </div>
            <MoviesList />
            <DanhSachSanPham />
        </MovieProvider>
    );
}