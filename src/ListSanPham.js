import React from 'react';
import './App.css'
import { MoviesList } from './components/MoviesList';
import DanhSachSanPham from './components/DanhSachSanPham';
import { MovieProvider } from './components/MovieContext';

export const ListSanPham = () => {
    return (
        <MovieProvider>
            <MoviesList />
            <DanhSachSanPham />
        </MovieProvider>
    );
}