import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Adminboard.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdminNav } from './AdminNav';
import {AdminPostSanPham } from './AdminPostSanPham'
import {AdminboardHome} from './AdminboardHome'
import {AdminProject} from './AdminProject'
import {AdminIncome} from './AdminIncome'
import {AdminSetting} from './AdminSetting'
import {AdminStore} from './AdminStore'

export const Adminboard = () => {

    return (
        <React.Fragment>
            <AdminNav style={{ margin: '0px', padding: '0px', marginTop: '160px' }}>
                <Router style={{ margin: '0px', padding: '0px' }}>
                    <Switch style={{ margin: '0px', padding: '0px' }}>
                        <Route exact path="/adminboard/profile" component={AdminboardHome} />
                        <Route exact path="/adminboard/postsanpham" component={AdminPostSanPham} />
                        <Route exact path="/adminboard/project" component={AdminProject} />
                        <Route exact path="/adminboard/income" component={AdminIncome} />
                        <Route exact path="/adminboard/settings" component={AdminSetting} />
                        <Route exact path="/adminboard/store" component={AdminStore} />
                    </Switch>
                </Router>
            </AdminNav>
        </React.Fragment>
    );
}