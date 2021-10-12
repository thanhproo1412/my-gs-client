import React from 'react';
import './App.css'
import { MoviesList } from './Components/MoviesList';
import DanhSachSanPham from './Components/DanhSachSanPham';
import { MovieProvider } from './Components/MovieContext';

export const ListSanPham = () => {
    return (
        <MovieProvider>
            <MoviesList />
            <DanhSachSanPham />
        </MovieProvider>
    );
}