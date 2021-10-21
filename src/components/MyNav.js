import React, { useState, useEffect } from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const faShoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const faTrashIcon = <FontAwesomeIcon icon={faTrash} />

export const MyNav = ({ username }) => {
    const history = useHistory()
    const logout = () => {
        localStorage.removeItem('authToken')
        history.push('/login')
        window.location.reload();
    }
    const [scrollY, setScrollY] = useState(0);
    const [navBg, setNavBg] = useState('my-nav-bg-white')
    const [scrollbar, setScrollbar] = useState('my-scrollbars ml-auto my-2 my-lg-0 my-nav-scroll-visible')
    const logit = () => {
        setScrollY(window.pageYOffset)
    }
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
            if (scrollY > 200) {
                setNavBg('my-nav-bg-dark')
                setScrollbar(scrollbar + ' d-none')
            }
            else {
                setNavBg('my-nav-bg-transparent')
                setScrollbar('my-scrollbars ml-auto my-2 my-lg-0 my-nav-scroll-visible')
            }
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    }, [scrollY]);
    return (
        <React.Fragment>
            <Navbar fixed='top' className='my-nav-bar' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img alt='' height='auto' width='54px' src={process.env.PUBLIC_URL + '/imgs/logo/t1-logo.png'} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='my-nav-link my-nav-link-active' href="/">Trang Chủ</Nav.Link>
                            <Nav.Link className='my-nav-link' href="/listsanpham">Sản Phẩm</Nav.Link>
                            <Nav.Link className='my-nav-link' href="/about">Giới thiệu</Nav.Link>
                            <Nav.Link className='my-nav-link' href="/news">tin tức</Nav.Link>
                            <Nav.Link className='my-nav-link' href="/contact">Liên hệ</Nav.Link>
                            <NavDropdown bsPrefix='my-nav-dropdown' title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                localStorage.getItem('authToken') ?
                                    <div className='d-flex flex-row'>
                                        <NavDropdown align="end" className='my-nav-dropdown-add-to-cart dropdown-menu-right' align='start' bsPrefix='my-nav-link my-nav-dropdown' title={faShoppingCartIcon} id="navbarScrollingDropdown">
                                            <div className='my-nav-cart'>
                                                <div className='p-2'>
                                                    <img className='img-fluid img-thumbnail' src='https://img.amiami.com/images/product/review/213/FIGURE-130184_15.jpg' alt='' />
                                                </div>
                                                <div className='my-nav-cart-info'>
                                                    <a href='/#' className='my-text-one-line'>
                                                        Figure ningguang
                                                    </a>
                                                    <div className='d-flex flex-row justify-content-around'>
                                                        <div>
                                                            <div className='d-inline-block'>
                                                                Số lượng:&nbsp;
                                                            </div>
                                                            <div className='d-inline-block'>2</div>
                                                        </div>
                                                        <div>
                                                            <div className='d-inline-block'>
                                                                Giá:&nbsp;
                                                            </div>
                                                            <div className='d-inline-block'> 888$</div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex flex-row-reverse'>
                                                        <div className='pe-4'>
                                                            <button className='my-nav-cart-delete-btn' onClick={()=>{}}>{faTrashIcon}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavDropdown.Divider />
                                        </NavDropdown>
                                        <NavDropdown className='my-nav-dropdown-user' align='start' bsPrefix='my-nav-link my-nav-dropdown' title={username} id="navbarScrollingDropdown">
                                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                            <NavDropdown.Item href="/adminboard">Bảng Điều Khiển</NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                    :
                                    <div>
                                        <Nav.Link bsPrefix='my-nav-signup-link' href="/register">Đăng kí</Nav.Link>
                                        <Nav.Link bsPrefix='my-nav-login-link' href="/login">Đăng nhập</Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}