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

export const AdminboardHome = () => {

    return (
        <React.Fragment>

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
            <div className='main-content-body'>
                <div className='cards'>
                    <div className='card-single'>
                        <div>
                            <h1>54</h1>
                            <span>Tổng sản phẩm</span>
                        </div>
                        <div>
                            <span>{faBoxesIcon}</span>
                        </div>
                    </div>
                    <div className='card-single'>
                        <div>
                            <h1>54</h1>
                            <span>Tổng sản phẩm</span>
                        </div>
                        <div>
                            <span>{faBoxesIcon}</span>
                        </div>
                    </div>
                    <div className='card-single'>
                        <div>
                            <h1>54</h1>
                            <span>Tổng sản phẩm</span>
                        </div>
                        <div>
                            <span>{faBoxesIcon}</span>
                        </div>
                    </div>
                    <div className='card-single'>
                        <div>
                            <h1>54</h1>
                            <span>Tổng sản phẩm</span>
                        </div>
                        <div>
                            <span>{faBoxesIcon}</span>
                        </div>
                    </div>
                </div>
                <div className="recent-grid">
                    <div className="projects">
                        <div className='card'>
                            <div className='card-header'>
                                <h3>Recent Projects</h3>
                                <MyButton3>See all&nbsp;&nbsp;&nbsp;
                                    <span>{faArrowRightIcon}</span>
                                </MyButton3>
                            </div>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Project Title</td>
                                                <td>Department</td>
                                                <td>Status</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>UI/UX Designer</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className='status pink'></span>
                                                    inprocess
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>shop app</td>
                                                <td>Mobile team</td>
                                                <td>
                                                    <span className='status orange'></span>
                                                    pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>shop app</td>
                                                <td>Mobile team</td>
                                                <td>
                                                    <span className='status green'></span>
                                                    complete
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='customers'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3 className='mt-2 text-center'>Recent customers</h3>
                            </div>
                            <div className='card-body'>
                                <div className='customer'>
                                    <img src='https://www.looper.com/img/gallery/takt-op-destiny-release-date-cast-and-plot-what-we-know-so-far/intro-1625582798.jpg' alt='' />
                                    <div className='info'>
                                        <div>Destiny</div>
                                        <small>Company CEO</small>
                                    </div>
                                    <div className='contact'>
                                        <span>{faUserCircleIcon}</span>
                                        <span>{faPhoneIcon}</span>
                                        <span>{faAddressBookIcon}</span>
                                    </div>
                                </div>
                                <div className='customer'>
                                    <img src='https://www.looper.com/img/gallery/takt-op-destiny-release-date-cast-and-plot-what-we-know-so-far/intro-1625582798.jpg' alt='' />
                                    <div className="info">
                                        <div>Destiny</div>
                                        <small>Company CEO</small>
                                    </div>
                                    <div className='contact'>
                                        <span>{faUserCircleIcon}</span>
                                        <span>{faPhoneIcon}</span>
                                        <span>{faAddressBookIcon}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}