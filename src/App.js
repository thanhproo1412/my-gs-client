import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Home from './Home';
import { TodoPage } from './TodoPage';
import { NoSite } from './NoSite';
import { ListSanPham } from './ListSanPham';
import { MyNav } from './components/MyNav';
import { MyFooter } from './components/MyFooter';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { About } from './components/About';
import { News } from './components/News';
// import { Jumbotron } from './components/Jumbotron';
import ItemDetail from './ItemDetail';
import { BackToTopArrow } from './components/components/CustomStyle';
import axios from 'axios';
import { Contact } from './components/Contact';
import { Adminboard } from './components/Adminboard';
import { AdminPostSanPham } from './components/AdminPostSanPham';
import { AdminNav } from './components/AdminNav';
import { AdminboardHome } from './components/AdminboardHome';
import { AdminProject } from './components/AdminProject';
import { AdminIncome } from './components/AdminIncome';
import { AdminSetting } from './components/AdminSetting';
import { AdminStore } from './components/AdminStore';

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
      <Layout style={{ margin: '0px', padding: '0px' }}>
        <BrowserRouter style={{ margin: '0px', padding: '0px' }}>
          {HideHeader}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TodoPage" element={() => <TodoPage authorized={true} />} />
            <Route path="/adminboard" element={<Adminboard />} >
              <Route path="home" element={<AdminboardHome />} />
              <Route path='postsanpham' element={<AdminPostSanPham />} />
              <Route path="project" element={<AdminProject />} />
              <Route path="income" element={<AdminIncome />} />
              <Route path="settings" element={<AdminSetting />} />
              <Route path="store" element={<AdminStore />} />
            </Route>
            <Route path="/adminboard/postsanpham" element={<AdminPostSanPham />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ListSanPham" element={<ListSanPham />} />
            <Route path="/ListSanPham/:id" element={<ItemDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route element={<NoSite />} />
          </Routes>
          {HideFooter}
        </BrowserRouter>
        <BackToTopArrow />
      </Layout>
    </React.Fragment>
  );
}

export default App;