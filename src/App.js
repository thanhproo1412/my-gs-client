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
import { Contact } from './components/Contact';
import { Adminboard } from './components/Adminboard';
import { AdminPostSanPham } from './components/AdminPostSanPham';
import { About } from './components/About';
import { News } from './components/News';
// import { Jumbotron } from './components/Jumbotron';
import ItemDetail from './ItemDetail';
import { BackToTopArrow } from './components/components/CustomStyle';
import axios from 'axios';

const App = () => {
  const [checklogin, setChecklogin] = useState();
  const [username, setUsername] = useState([''])
  useEffect(async () => {
    const localToken = localStorage.getItem('authToken')
    await axios.get('https://my-gs-server.herokuapp.com/api/posts/user/info',
      {
        headers: {
          authToken: localToken
        }
      })
      .then((res) => {
        console.log(checklogin)
        if (res.status === 200) {
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

  let HideHeader = ((window.location.pathname === '/Login' && '/Confirm' && '/Signup') || (window.location.pathname.startsWith('/adminboard'))) ? null : <MyNav username={username} />
  let HideFooter = ((window.location.pathname === '/Login' && '/Confirm' && '/Signup') || (window.location.pathname.startsWith('/adminboard'))) ? null : <MyNav username={username} />
  //      && là and, || là or
  return (
    <React.Fragment style={{ margin: '0px', padding: '0px' }}>
      <Layout style={{ margin: '0px', padding: '0px', marginTop: '160px' }}>
        <Router style={{ margin: '0px', padding: '0px' }}>
          {HideHeader}
          <Switch style={{ margin: '0px', padding: '0px' }}>
            <Route style={{ margin: '0px', padding: '0px' }} exact path="/" component={Home} />
            <Route path="/TodoPage" component={() => <TodoPage authorized={true} />} />
            <Route path="/adminboard" component={Adminboard} />
            <Route path="/adminboard/postsanpham" component={AdminPostSanPham} />
            <Route path="/Login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/ListSanPham" component={ListSanPham} />
            <Route path="/ListSanPham/:id" component={ItemDetail} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route component={NoSite} />
          </Switch>
          {HideFooter}
        </Router>
        <BackToTopArrow />
      </Layout>
    </React.Fragment>
  );
}

export default App;