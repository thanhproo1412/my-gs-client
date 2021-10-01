import React, { useState, useEffect } from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faTwitch, faGooglePlusG, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const faFacebookFIcon = <FontAwesomeIcon icon={faFacebookF} />
const faTwitterIcon = <FontAwesomeIcon icon={faTwitter} />
const faTwitchIcon = <FontAwesomeIcon icon={faTwitch} />
const faGooglePlusGIcon = <FontAwesomeIcon icon={faGooglePlusG} />
const faYoutubeIcon = <FontAwesomeIcon icon={faYoutube} />
const faInstagramIcon = <FontAwesomeIcon icon={faInstagram} />

export const MyNav = () => {
    const history = useHistory()
    const [username, setUsername] = useState([''])
    const localToken = localStorage.getItem('authToken')
    useEffect(() => {
        axios.get('https://my-gs-server.herokuapp.com/api/posts/user/info',
            {
                headers: {
                    authToken: localToken
                }
            })
            .then((res) => {
                if (res.status == 200) {
                    setUsername(res.data.username)
                    console.log(res.data)
                }
                else {
                    localStorage.removeItem('authToken')
                }
            })
            .catch(err => console.log(err));
    },[])

    const logout = () => {
        localStorage.removeItem('authToken')
        history.push('/login')
        window.location.reload();
    }
    const [scrollY, setScrollY] = useState(0);
    const [navBg, setNavBg] = useState('my-nav-bg-white')
    const logit = () => {
        setScrollY(window.pageYOffset)
    }
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
            if (scrollY > 20) {
                setNavBg('my-nav-bg-dark')
            }
            else {
                setNavBg('my-nav-bg-transparent')
            }
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });
    return (
        <div>
            <div className="nav-margin"></div>
            <Navbar className={navBg} bg="dark" variant="dark" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand className='my-nav-brand' href="/">GS
                        <span style={{ color: '#FFC411C7' }}>.GG</span>
                        <img src='/imgs/logo/gi-logo.png' alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='my-nav-collapse flex-column' id="navbarScroll">
                        <Nav className='my-nav-collapse-flex'>
                            <Navbar.Brand className='mt-4 my-nav-brand my-collapse-none text-center' href="/">GENSHIN<span style={{ color: 'red', }}>.GG</span></Navbar.Brand>
                        </Nav>
                        <Nav navbarScroll className="mt-4 mb-4 ml-auto my-2 my-lg-0 my-Nav align-items-center d-flex justify-content-start">
                            <Nav.Link href="/" bsPrefix='my-nav-social-link'>{faFacebookFIcon}</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-social-link' href="/">{faTwitterIcon}</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-social-link' href="/">{faTwitchIcon}</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-social-link' href="/">{faGooglePlusGIcon}</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-social-link' href="/">{faYoutubeIcon}</Nav.Link>
                            <Nav.Link bsPrefix='mr-auto my-nav-social-link' href="/">{faInstagramIcon}</Nav.Link>
                            {
                                localStorage.getItem('authToken') ?
                                    <>
                                        <NavDropdown bsPrefix='my-nav-link my-nav-dropdown' title={username} id="navbarScrollingDropdown">
                                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                    :
                                    <>
                                        <Nav.Link bsPrefix='my-nav-signup-link' href="/register">Đăng kí</Nav.Link>
                                        <Nav.Link bsPrefix='my-nav-login-link' href="/login">Đăng nhập</Nav.Link>
                                    </>
                            }
                        </Nav>
                        <Nav className="my-scrollbars ml-auto my-2 my-lg-0 my-nav-scroll-visible" navbarScroll>
                            <Nav.Link bsPrefix='my-nav-link' href="/">Home</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-link' href="/ListSanPham">ListSanPham</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-link' href="/ListSanPham">About</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-link' href="/ListSanPham">Forum</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-link' href="/ListSanPham">Comunity</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-link' href="/ListSanPham">Contact</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-link' href="/ListSanPham">Pages</Nav.Link>
                            <NavDropdown bsPrefix='my-nav-link my-nav-dropdown' title='More info' id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/ListSanPham">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/ListSanPham">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/ListSanPham">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link bsPrefix='my-nav-link' href="/TodoPage">Todo Page</Nav.Link>
                        </Nav>
                        <Nav className='my-nav-login-signup-collapse'>
                            <Nav.Link bsPrefix='my-nav-signup-collapse' href="/">Đăng kí</Nav.Link>
                            <Nav.Link bsPrefix='my-nav-login-collapse' href="/">Đăng nhập</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}