import React from 'react'
import logo from '../../images/logo.png'
import logoSmall from '../../images/logo-small.png'
import { Link } from 'react-router-dom';

function Header() {
    const miniSidebar = () => {
        const check = document.body.classList.contains('mini-sidebar');
        const body = document.body;
        if (check) {
            body.classList.remove("mini-sidebar")
        } else {
            body.classList.add("mini-sidebar");
        }
    }
    return (
        <div>
            <div className="header">
                {/* Logo */}
                <div className="header-left">
                    <Link to="/" className="logo">
                        <img src={logo} className="large" width={85} height={65} alt />
                        <img src={logoSmall} className="small" alt />
                    </Link>
                </div>
                {/* /Logo */}
                {/* <a id="toggle_btn" href="javascript:void(0);"> */}
                <a onClick={miniSidebar} id='toggle_btn'>
                    <span className="bar-icon">
                        <span />
                        <span />
                        <span />
                    </span>
                </a>
                {/* Header Title */}
                {/*            <div class="page-title-box">*/}
                {/*	<h3>Techades </h3>*/}
                {/*            </div>*/}
                {/* /Header Title */}
                <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars" /></a>
                {/* Header Menu */}
                <ul className="nav user-menu">
                    {/* Search */}
                    {/* /Search */}
                    {/* Flag */}
                    {/* /Flag */}
                    <li className="nav-item dropdown">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                            <i className="ti-alarm-clock" />
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Remainder-Due</span>
                                {/* <a href="javascript:void(0)" className="clear-noti"> Clear All </a> */}
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-02.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                                                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-03.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                                                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-06.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                                    <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-17.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                                                    <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-13.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                                                    <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <Link to="#">View all Notifications</Link>
                            </div>
                        </div>
                    </li>
                    {/* Notifications */}
                    <li className="nav-item dropdown">
                        <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                            <i className="fa fa-bell-o" /> <span className="badge badge-pill">3</span>
                        </Link>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                {/* <a href="javascript:void(0)" className="clear-noti"> Clear All </a> */}
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-02.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                                                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-03.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                                                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-06.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                                    <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-17.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                                                    <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to="#">
                                            <div className="media">
                                                <span className="avatar">
                                                    {/* <img alt src="%PUBLIC_URL%/assets/img/profiles/avatar-13.jpg" /> */}
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                                                    <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <Link to="#">View all Notifications</Link>
                            </div>
                        </div>
                    </li>
                    {/* /Notifications */}
                    {/*<li class="nav-item dropdown">*/}
                    {/*	<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">*/}
                    {/*		<i class="ti-timer"></i>*/}
                    {/*	</a>*/}
                    {/*</li>*/}
                    {/*<li class="nav-item dropdown">*/}
                    {/*	<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">*/}
                    {/*		<i class="sl-icon-bubbles"></i>*/}
                    {/*	</a>*/}
                    {/*</li>*/}
                    {/*<li class="nav-item dropdown">*/}
                    {/*	<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">*/}
                    {/*		<i class="sl-icon-settings"></i>*/}
                    {/*	</a>*/}
                    {/*</li>*/}
                    {/*<li class="nav-item dropdown">*/}
                    {/*	<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">*/}
                    {/*		<i class="mdi mdi-plus-circle-multiple-outline" style="font-size:28px"></i>*/}
                    {/*	</a>*/}
                    {/*</li>*/}
                    {/*<li class="nav-item dropdown">*/}
                    {/*	<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">*/}
                    {/*		<i class="sl-icon-globe"></i>*/}
                    {/*	</a>*/}
                    {/*</li>*/}
                    {/* Message Notifications */}
                    {/* /Message Notifications */}
                    <li className="nav-item dropdown has-arrow main-drop">
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                            <span className="user-img">
                                {/* <img src="%PUBLIC_URL%/assets/img/profiles/avatar-21.jpg" alt /> */}
                                <span className="status online" /></span>
                            <span>Phogo App</span>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="profile.php">My Profile</a>
                            <a className="dropdown-item" href="settings.php">Settings</a>
                            {/* <a className="dropdown-item" href="javascript:void();" onclick="logout();">Logout</a> */}
                        </div>
                    </li>
                </ul>
                {/* /Header Menu */}
                {/* Mobile Menu */}
                <div className="dropdown mobile-user-menu">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="profile.php">My Profile</a>
                        <a className="dropdown-item" href="settings.php">Settings</a>
                        <a className="dropdown-item" href="index.php">Logout</a>
                    </div>
                </div>
                {/* /Mobile Menu */}
            </div>

        </div>
    )
}

export default Header