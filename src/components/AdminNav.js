import React from 'react';
// import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faIgloo, faUser, faToolbox, faStore, faClipboardList, faBars, faSearch, faBoxes, faArrowRight, faUserCircle, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { MyButton3 } from './components/CustomStyle';
import './css/Adminboard.css';

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
                                <a href='/#' className='active'><span>{faUserIcon}</span>
                                    <span>Profile</span></a>
                            </li>
                            <li className='sidebar-item'>
                                <a href='/adminboard/postsanpham' className=''><span>{faStoreIcon}</span>
                                    <span>Store</span></a>
                            </li><li className='sidebar-item'>
                                <a href='/#' className=''><span>{faClipboardListIcon}</span>
                                    <span>Project</span></a>
                            </li>
                            <li className='sidebar-item'>
                                <a href='/#' className=''><span>{faToolboxIcon}</span>
                                    <span>Settings</span></a>
                            </li>
                            <li className='sidebar-item'>
                                <a href='/#' className=''><span>{faIglooIcon}</span>
                                    <span>Link</span></a>
                            </li>
                            <li className='sidebar-item'>
                                <a href='/#' className=''><span>{faIglooIcon}</span>
                                    <span>Link</span></a>
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