import React from 'react';
import './App.css'
import { MoviesList } from './components/MoviesList';
import DanhSachSanPham from './components/DanhSachSanPham';
import { MovieProvider } from './components/MovieContext';
import { Image166 } from './components/components/CustomStyle';

export const ListSanPham = () => {
    return (
        <div>
        <div className="listsanpham-banner">
            <Image166 alt='' src={process.env.PUBLIC_URL + "/imgs/background/ga-ran-gi.jpg"} />
        </div>
            <MovieProvider>
                <MoviesList />
                <DanhSachSanPham />
            </MovieProvider>
        </div>
    );
}