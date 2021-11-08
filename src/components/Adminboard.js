import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Adminboard.css';
import { BrowserRouter as Routes, Route, Outlet } from 'react-router-dom';
import { AdminNav } from './AdminNav';

export const Adminboard = () => {

    return (
        <React.Fragment>
            <AdminNav>
                <Outlet />
            </AdminNav>
        </React.Fragment>
    );
}