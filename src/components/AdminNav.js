import React from 'react';
// import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faIgloo, faUser, faToolbox, faStore, faClipboardList, faBars, faSearch, faBoxes, faArrowRight, faUserCircle, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { MyButton3 } from './components/CustomStyle';
import { NavLink } from 'react-router-dom';
import './css/Adminboard.css';
import { Link } from 'react-router-dom';

const faAccusoftIcon = <FontAwesomeIcon icon={faAccusoft} />
const faIglooIcon = <FontAwesomeIcon icon={faIgloo} />
const faUserIcon = <FontAwesomeIcon icon={faUser} />
const faToolboxIcon = <FontAwesomeIcon icon={faToolbox} />
const faStoreIcon = <FontAwesomeIcon icon={faStore} />
const faClipboardListIcon = <FontAwesomeIcon icon={faClipboardList} />
const faBarsIcon = <FontAwesomeIcon icon={faBars} />
const faSearchIcon = <FontAwesomeIcon icon={faSearch} />
const faBoxesIcon = <FontAwesomeIcon icon={faBoxes} />
const faArrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />
const faUserCircleIcon = <FontAwesomeIcon icon={faUserCircle} />
const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />
const faAddressBookIcon = <FontAwesomeIcon icon={faAddressBook} />

export const AdminNav = (props) => {

    return (
        <React.Fragment>
            <div>
                <input type="checkbox" id='nav-toggle' />
                <div className='sidebar-toggle'>
                    <div className='sidebar-brand'>
                        <h3 className='text-center'>
                            <a href='/'>
                                <span>{faAccusoftIcon}</span>
                                <span>Home</span>
                            </a>
                        </h3>
                    </div>
                    <div className='sidebar-menu'>
                        <ul>
                            <li className='sidebar-item'>
                                <Link to="/adminboard/home" activeClassName="active">
                                    <span>{faUserIcon}</span>
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link to="/adminboard/postsanpham" active="active">
                                    <span>{faStoreIcon}</span>
                                    <span>Store</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link to="/adminboard/project" active="active">
                                    <span>{faClipboardListIcon}</span>
                                    <span>Project</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link to="/adminboard/settings" active="active">
                                    <span>{faToolboxIcon}</span>
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link to="/adminboard/Link" activeClassName="active">
                                    <span>{faIglooIcon}</span>
                                    <span>Link</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link to="/adminboard/Link2" activeClassName="active">
                                    <span>{faIglooIcon}</span>
                                    <span>Link</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='main-content'>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}