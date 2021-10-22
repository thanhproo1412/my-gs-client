import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Adminboard.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdminNav } from './AdminNav';
import {AdminPostSanPham } from './AdminPostSanPham'
import {AdminboardHome} from './AdminboardHome'

export const Adminboard = () => {

    return (
        <React.Fragment>

            <AdminNav style={{ margin: '0px', padding: '0px', marginTop: '160px' }}>
                <Router style={{ margin: '0px', padding: '0px' }}>
                    <Switch style={{ margin: '0px', padding: '0px' }}>
                        <Route path="/adminboard/postsanpham" component={AdminPostSanPham} />
                        <Route path="/adminboard" component={AdminboardHome} />
                    </Switch>
                </Router>
            </AdminNav>
            
        </React.Fragment>
    );
}