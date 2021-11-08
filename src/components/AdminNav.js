import React from 'react';
// import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft, faGoogleWallet } from '@fortawesome/free-brands-svg-icons';
import { faIgloo, faUser, faToolbox, faStore, faClipboardList, faBars, faSearch, faTools, faArrowRight, faUserCircle, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
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
const faGoogleWalletIcon = <FontAwesomeIcon icon={faGoogleWallet} />
const faToolsIcon = <FontAwesomeIcon icon={faTools} />
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
                                <Link to="/adminboard/home" activeStyle="active">
                                    <span>{faUserIcon}</span>
                                    <span>Home</span>
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
                                <Link to="/adminboard/settings" activeStyle="active">
                                    <span>{faToolboxIcon}</span>
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link to="/adminboard/income" activeStyle="active">
                                    <span>{faGoogleWalletIcon}</span>
                                    <span>Income</span>
                                </Link>
                            </li>
                            <li className='sidebar-item'>
                                <Link to="/adminboard/settings" activeStyle="active">
                                    <span>{faToolsIcon}</span>
                                    <span>Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='main-content-head'>
                    <h3>
                        <label for='nav-toggle'>
                            <span>{faBarsIcon}</span>
                            DashBoard
                        </label>
                    </h3>
                    <div className="search-wrapper">
                        <input type="search" placeholder='Search here' className="" />
                        <span>{faSearchIcon}</span>
                    </div>
                    <div className='user-wrapper'>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/baed7084-e7c6-4507-9dc8-737f22173fcf/d8u6y1h-1f1fd29e-d9b4-4625-90cc-2266cc145b7b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhZWQ3MDg0LWU3YzYtNDUwNy05ZGM4LTczN2YyMjE3M2ZjZlwvZDh1NnkxaC0xZjFmZDI5ZS1kOWI0LTQ2MjUtOTBjYy0yMjY2Y2MxNDViN2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2AjSYFEnoLDiiJmOxEFE3rFoTEf1lf4QQHuIRi9Uvqw" alt='' />
                        <div>
                            <div className='user-name'>Hai Thanh</div>
                            <small><span>Role: </span>admin</small>
                        </div>
                    </div>
                </div>
                <div className='main-content'>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}