import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="page-wrapper">
                {/* Page Content */}
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Welcome Admin!</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                            <ul className="nav nav-tabs nav-tabs-bottom">
                                <li className="nav-item"><Link className="nav-link active" to="#Accounts-tab" data-toggle="tab">Accounts</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#HRM-tab" data-toggle="tab">HRM</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#Tracker-tab" data-toggle="tab">Tracker</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#Marketing-tab" data-toggle="tab">Marketing</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#Business-tab" data-toggle="tab">Business</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row row-cards">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                            <div className="tab-content">
                                <div className="tab-pane show active" id="Accounts-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-success icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>834000</h3>
                                                        <span>Total Revenue</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-info icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>515000</h3>
                                                        <span>Total Expense</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-warning icon-Coin" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>319000</h3>
                                                        <span>Total Profit</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-danger icon-Coins-2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>142000</h3>
                                                        <span>Total Due</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6 text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Earnings VS Profit</h3>
                                                            <div id="bar-charts" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Income VS Expenses</h3>
                                                            <div id="line-charts" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">Due Payments</h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="payments.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table table-nowrap custom-table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Orders ID</th>*/}
                                                                    <th>Customer</th>
                                                                    <th>Mobile No</th>
                                                                    <th>Amount</th>
                                                                    <th>Due Date</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">Siva</Link></h2>
                                                                    </td>
                                                                    <td>9858920423</td>
                                                                    <td>52000</td>
                                                                    <td>17 May 2023</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">High Expenses</h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="expenses.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table custom-table table-nowrap mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Invoice ID</th>*/}
                                                                    <th>Name</th>
                                                                    <th>Date</th>
                                                                    <th>Amount</th>
                                                                    <th>PayType</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">Sony v12</Link></h2>
                                                                    </td>
                                                                    <td>11 Mar 2019</td>
                                                                    <td>120000</td>
                                                                    <td>Credit Card</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="HRM-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-success icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>12</h3>
                                                        <span>Total Departments</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-info icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>34</h3>
                                                        <span>Total Employees</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-warning icon-Coin" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>108000</h3>
                                                        <span>Monthly Salary</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-danger icon-Coins-2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>90%</h3>
                                                        <span>Today Attendance</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6 text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Actual VS Spent </h3>
                                                            <canvas id="myChart1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Attendance</h3>
                                                            <div className="chart-container" style={{ position: 'relative', height: '37vh', width: '80vw', left: '25%' }}>
                                                                <canvas id="myChart2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">Active Employees</h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="employees.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table table-nowrap custom-table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Orders ID</th>*/}
                                                                    <th>Name</th>
                                                                    <th>Mobile No</th>
                                                                    <th>Attedance</th>
                                                                    <th>Effort Hours</th>
                                                                    <th>Order</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">Siva</Link></h2>
                                                                    </td>
                                                                    <td>9004034435</td>
                                                                    <td>100%</td>
                                                                    <td>154</td>
                                                                    <td>ORD004,ORD104</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Tracker-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-success icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>202</h3>
                                                        <span>Total Orders</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-info icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>284</h3>
                                                        <span>Total Tasks</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-warning icon-Coin" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>151</h3>
                                                        <span>Total Completed</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-danger icon-Coins-2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>133</h3>
                                                        <span>Total Pending</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6 text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Completed VS Pending</h3>
                                                            <canvas id="myChart3" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Employee/ Vendor VS Tasks</h3>
                                                            <canvas id="myChart4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">Nearing Deadline</h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="tracking.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table table-nowrap custom-table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Orders ID</th>*/}
                                                                    <th>Order ID</th>
                                                                    <th>Task</th>
                                                                    <th>Deadline</th>
                                                                    <th>Assigned</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">ORD003</Link></h2>
                                                                    </td>
                                                                    <td>Photo Selection</td>
                                                                    <td>22 Nov 2023 </td>
                                                                    <td>Client</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">Longtime Pending</h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="tracking.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table custom-table table-nowrap mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Invoice ID</th>*/}
                                                                    <th>Order ID</th>
                                                                    <th>Task</th>
                                                                    <th>Deadline</th>
                                                                    <th>Assigned</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">ORD001</Link></h2>
                                                                    </td>
                                                                    <td>Photo Selection</td>
                                                                    <td>14 Feb 2023 </td>
                                                                    <td>Client</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Marketing-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-success icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>1088</h3>
                                                        <span>Total Leads</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-info icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>234</h3>
                                                        <span>Total Customers</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-warning icon-Coin" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>856</h3>
                                                        <span>Total Estimate</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-danger icon-Coins-2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>202</h3>
                                                        <span>Total Orders</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6 text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Leads VS Customer</h3>
                                                            <canvas id="myChart5" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Estimate VS Orders</h3>
                                                            <canvas id="myChart6" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">Recent Leads</h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="leads.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table table-nowrap custom-table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Orders ID</th>*/}
                                                                    <th>Name</th>
                                                                    <th>Mobileno</th>
                                                                    <th>Event</th>
                                                                    <th>Date</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">Siva</Link></h2>
                                                                    </td>
                                                                    <td>9402002443</td>
                                                                    <td>Wedding</td>
                                                                    <td>17 Jan 2024</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">Upcoming Orders</h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="estimates.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table custom-table table-nowrap mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Invoice ID</th>*/}
                                                                    <th>Est ID</th>
                                                                    <th>Value</th>
                                                                    <th>Name</th>
                                                                    <th>Mobileno</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">EST-145</Link></h2>
                                                                    </td>
                                                                    <td>120000</td>
                                                                    <td>Karthick</td>
                                                                    <td>9400430341</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Business-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-success icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>30</h3>
                                                        <span>Total Events</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-info icon-Credit-Card2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>48</h3>
                                                        <span>Total Services</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-warning icon-Coin" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>56</h3>
                                                        <span>Total Tasks</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card dash-widget">
                                                <div className="card-body">
                                                    <span className="dash-widget-icon"><i className="text-danger icon-Coins-2" /></span>
                                                    <div className="dash-widget-info">
                                                        <h3>77</h3>
                                                        <span>Total Equipments</span>
                                                    </div>
                                                </div>
                                                <div className="progress" style={{ height: 5, marginBottom: '-2px' }}>
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">Equipment in Service</h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="equipments.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table table-nowrap custom-table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Orders ID</th>*/}
                                                                    <th>Equipment</th>
                                                                    <th>Date</th>
                                                                    <th>ToWhom</th>
                                                                    <th>MobileNo</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">SonyV12</Link></h2>
                                                                    </td>
                                                                    <td>17 Sep 2023</td>
                                                                    <td>NB Makers</td>
                                                                    <td>9490234004</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex">
                                            <div className="card card-table flex-fill">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h3 className="card-title mb-0">Vendor List </h3>
                                                        </div>
                                                        <div className="col-md-6 text-right">
                                                            {/* <a href="vendors.php" className="btn btn-success btn-sm">View All</a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive dashboard-table-height">
                                                        <table className="table custom-table table-nowrap mb-0">
                                                            <thead>
                                                                <tr>
                                                                    {/*<th>Invoice ID</th>*/}
                                                                    <th>Name</th>
                                                                    <th>Company</th>
                                                                    <th>Type</th>
                                                                    <th>MobileNo</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2><Link to="#">Siva</Link></h2>
                                                                    </td>
                                                                    <td>AB Photography</td>
                                                                    <td>Lights</td>
                                                                    <td>9300353533</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </div>
        </div>
    )
}

export default Home