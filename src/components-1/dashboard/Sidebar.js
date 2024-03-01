import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <div className="sidebar" id="sidebar">
                <div className='slimScrollDiv'>
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <ul>
                                {/*
							<li class="menu-title"> 
								<span>Main</span>
							</li>
							*/}
                                <li className="menu-title"><span>&nbsp;</span></li>
                                <li className>
                                    <Link to="/" title="Dashboard"><i className="la la-dashboard" /> <span> Dashboard</span></Link>
                                </li>
                                {/*
							<li class="submenu">
								<a href="#"><i class="la la-pie-chart"></i> <span> Reports </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="expense-reports.php"> Expense Report </a></li>
									<li><a href="invoice-reports.php"> Invoice Report </a></li>
									<li><a href="payments-reports.php"> Payments Report </a></li>
									<li><a href="project-reports.php"> Project Report </a></li>
									<li><a href="task-reports.php"> Task Report </a></li>
									<li><a href="user-reports.php"> User Report </a></li>
									<li><a href="employee-reports.php"> Employee Report </a></li>
									<li><a href="payslip-reports.php"> Payslip Report </a></li>
									<li><a href="attendance-reports.php"> Attendance Report </a></li>
									<li><a href="leave-reports.php"> Leave Report </a></li>
									<li><a href="daily-reports.php"> Daily Report </a></li>
								</ul>
							</li>
							*/}
                                <li className="menu-title mt-3">
                                    <span>Data</span>
                                </li>
                                <li>
                                    <Link to="leads" title="Leads"><i className="la la-user-circle" /> <span>Leads</span></Link>
                                </li>
                                <li>
                                    <Link to="orders" title="Orders"><i className="la la-user-tie" /> <span>Orders</span></Link>
                                </li>
                                {/* <li>
                                    <a href="employees.php" title="Employees"><i className="la la-user" /> <span>Employees</span></a>
                                </li>
                                <li>
                                    <a href="vendors.php" title="Vendors"><i className="la la-users" /> <span>Vendors</span></a>
                                </li>
                                <li>
                                    <a href="feedbacks.php" title="Feedbacks"><i className="la la-comment" /> <span>Feedbacks</span></a>
                                </li> */}
                                {/*<li> */}
                                {/*	<a href="users.php"><i class="la la-user-plus"></i> <span>Users</span></a>*/}
                                {/*</li>*/}
                                <li className="menu-title mt-3">
                                    <span>Master</span>
                                </li>
                                <li>
                                    <Link to="account-head" title="Estimates"><i className="la la-money" /> <span>Account Head</span></Link>
                                </li>
                                <li>
                                    <a href="payments.php" title="Payments"><i className="la la-wallet" /> <span>Payments</span></a>
                                </li>
                                <li>
                                    <a href="expenses.php" title="Expenses"><i className="la la-money-bill" /> <span>Expenses</span></a>
                                </li>
                                <li>
                                    <a href="all_transactions.php" title="All Transactions"><i className="la la-money-check-alt" /> <span>All Transactions</span></a>
                                </li>
                                {/*
							<li> 
								<a href="invoices.php"><i class="la la-columns"></i> <span>Invoices</span></a>
							</li>
							*/}
                                <li className="menu-title mt-3">
                                    <span>Project Management</span>
                                </li>
                                <li>
                                    <a href="orders.php" title="Orders"><i className="la la-file-invoice-dollar" /> <span>Orders</span></a>
                                </li>
                                <li>
                                    <a href="tracking.php" title="Tracking"><i className="la la-business-time" /> <span>Tracking</span></a>
                                </li>
                                <li>
                                    <a href="calendar.php" title="Calendar"><i className="la la-calendar" /> <span>Calendar</span></a>
                                </li>
                                <li>
                                    <a href="image_selection.php" title="Image Selection"><i className="la la-image" /> <span>Image Selection</span></a>
                                </li>
                                <li>
                                    <a href="albumsfb.php" title="Albums"><i className="la la-images" /> <span>Albums</span></a>
                                </li>
                                <li>
                                    <a href="videosfb.php" title="Videos"><i className="la la-film" /> <span>Videos</span></a>
                                </li>
                                <li className="menu-title mt-3">
                                    <span>HRM</span>
                                </li>
                                <li>
                                    <a href="appointments.php" title="Appointments"><i className="la la-calendar-check" /> <span>Appointments</span></a>
                                </li>
                                <li>
                                    <a href="departments.php" title="Departments"><i className="la la-boxes" /> <span>Departments</span></a>
                                </li>
                                <li>
                                    <a href="designations.php" title="Designations"><i className="la la-id-card" /> <span>Designations</span></a>
                                </li>
                                <li>
                                    <a href="timesheets.php" title="Timesheets"><i className="la la-calendar-week" /> <span>Timesheets</span></a>
                                </li>
                                <li>
                                    <a href="attendance.php" title="Attendance"><i className="la la-calendar-check" /> <span>Attendance</span></a>
                                </li>
                                <li>
                                    <a href="payroll.php" title="Payroll"><i className="la la-money" /> <span>Payroll</span></a>
                                </li>
                                <li>
                                    <a href="salary.php" title="Salary"><i className="la la-credit-card" /> <span>Salary</span></a>
                                </li>
                                <li>
                                    <a href="leaves.php" title="Leaves"><i className="la la-calendar-times" /> <span>Leaves</span></a>
                                </li>
                                <li>
                                    <a href="holidays.php" title="Holidays"><i className="la la-business-time" /> <span>Holidays</span></a>
                                </li>
                                <li>
                                    <a href="announcement.php" title="Announcements"><i className="la la-bullhorn" /> <span>Announcements</span></a>
                                </li>
                                <li className="menu-title mt-3">
                                    <span>My Business</span>
                                </li>
                                <li>
                                    <a href="products.php" title="Products"><i className="la la-shopping-cart" /> <span>Products</span></a>
                                </li>
                                <li>
                                    <a href="stores.php" title="Products"><i className="la la-industry" /> <span>Stores</span></a>
                                </li>
                                <li>
                                    <a href="equipments.php" title="Equipments"><i className="la la-tools" /> <span>Equipments</span></a>
                                </li>
                                <li>
                                    <a href="eqserv.php" title="EquServ"><i className="la la-list" /> <span>EquServ</span></a>
                                </li>
                                <li>
                                    <a href="portfolio.php" title="Portfolio"><i className="la la-icons" /> <span>Portfolio</span></a>
                                </li>
                                <li>
                                    <a href="services.php" title="Services"><i className="la la-clipboard-list" /> <span>Services</span></a>
                                </li>
                                <li>
                                    <a href="events.php" title="Events"><i className="la la-photo-video" /> <span>Events</span></a>
                                </li>
                                <li>
                                    <a href="tasks.php" title="Tasks"><i className="la la-newspaper" /> <span>Tasks</span></a>
                                </li>
                                <li>
                                    <a href="packages.php" title="Packages"><i className="la la-money-check-alt" /> <span>Packages</span></a>
                                </li>
                                <li>
                                    <a href="testimonials.php" title="Testimonials"><i className="la la-comment-o" /> <span>Testimonials</span></a>
                                </li>
                                <li>
                                    <a href="profile.php" title="Profile"><i className="la la-user" /> <span>Profile</span></a>
                                </li>
                                <li>
                                    <a href="terms.php" title="Terms"><i className="la la-info" /> <span>Terms</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar