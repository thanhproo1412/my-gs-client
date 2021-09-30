import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { TodoPage } from './TodoPage';
import { NoSite } from './NoSite';
import { ListSanPham } from './ListSanPham';
import { MyNav } from './components/MyNav';
import { MyFooter } from './components/MyFooter';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AdminBoard } from './components/AdminBoard';
// import { Jumbotron } from './components/Jumbotron';
import ItemDetail from './ItemDetail';
import { BackToTopArrow } from './components/components/CustomStyle';

const App = () => {
  const [checklogin, setChecklogin] = useState(false);
  const getToken = localStorage.getItem('authToken')

  return (
    <React.Fragment style={{ margin: '0px', padding: '0px' }}>
      <MyNav checklogin={checklogin} setChecklogin={setChecklogin} />
      <Layout style={{ margin: '0px', padding: '0px', marginTop: '160px' }}>
        <Router style={{ margin: '0px', padding: '0px' }}>
          <Switch style={{ margin: '0px', padding: '0px' }}>
            <Route style={{ margin: '0px', padding: '0px' }} exact path="/" component={Home} />
            <Route path="/TodoPage" component={() => <TodoPage authorized={checklogin} />} />
            <Route path="/AdminBoard" component={AdminBoard} />
            <Route path="/Login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/ListSanPham" component={ListSanPham} />
            <Route path="/ListSanPham/:id" component={ItemDetail} />
            <Route component={NoSite} />
          </Switch>
        </Router>
        <MyFooter />
        <BackToTopArrow />
      </Layout>
    </React.Fragment>
  );
}

export default App;