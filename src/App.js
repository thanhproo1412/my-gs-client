import React, { useState, useEffect } from 'react';
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
import axios from 'axios';


const App = () => {
  const [checklogin, setChecklogin] = useState();
  const localToken = localStorage.getItem('authToken')
  const [username, setUsername] = useState([''])
  useEffect(async () => {
    await axios.get('https://my-gs-server.herokuapp.com/api/posts/user/info',
      {
        headers: {
          authToken: localToken
        }
      })
      .then((res) => {
        if (res.status == 200) {
          setUsername(res.data.username)
          setChecklogin(true)
        }
        else {
          localStorage.removeItem('authToken')
          setChecklogin(false)
        }
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <React.Fragment style={{ margin: '0px', padding: '0px' }}>
      <Layout style={{ margin: '0px', padding: '0px', marginTop: '160px' }}>
        <Router style={{ margin: '0px', padding: '0px' }}>
          <MyNav username={username} />
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