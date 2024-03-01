import React from 'react'

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
                                <li className="nav-item"><a className="nav-link active" href="#Accounts-tab" data-toggle="tab">Accounts</a></li>
                                <li className="nav-item"><a className="nav-link" href="#HRM-tab" data-toggle="tab">HRM</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Tracker-tab" data-toggle="tab">Tracker</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Marketing-tab" data-toggle="tab">Marketing</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Business-tab" data-toggle="tab">Business</a></li>
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
                                                            <a href="payments.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">Siva</a></h2>
                                                                    </td>
                                                                    <td>9858920423</td>
                                                                    <td>52000</td>
                                                                    <td>17 May 2023</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Arun</a></h2>
                                                                    </td>
                                                                    <td>8748990493</td>
                                                                    <td>34000</td>
                                                                    <td>8 July 2023</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Rahul</a></h2>
                                                                    </td>
                                                                    <td>9786593001</td>
                                                                    <td>18000</td>
                                                                    <td>22 Oct 2023</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Sathish</a></h2>
                                                                    </td>
                                                                    <td>9948990543</td>
                                                                    <td>70000</td>
                                                                    <td>01 Nov 2023</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Papitha</a></h2>
                                                                    </td>
                                                                    <td>6324598103</td>
                                                                    <td>84000</td>
                                                                    <td>16 Nov 2023</td>
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
                                                            <a href="expenses.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">Sony v12</a></h2>
                                                                    </td>
                                                                    <td>11 Mar 2019</td>
                                                                    <td>120000</td>
                                                                    <td>Credit Card</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Wide Lens</a></h2>
                                                                    </td>
                                                                    <td>18 June 2022</td>
                                                                    <td>45000</td>
                                                                    <td>Debit Card</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">LED Lights</a></h2>
                                                                    </td>
                                                                    <td>05 Jan 2023</td>
                                                                    <td>7500</td>
                                                                    <td>Gpay</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Battery</a></h2>
                                                                    </td>
                                                                    <td>28 May 2023</td>
                                                                    <td>12000</td>
                                                                    <td>Cash</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Bags</a></h2>
                                                                    </td>
                                                                    <td>06 Oct 2023</td>
                                                                    <td>4200</td>
                                                                    <td>Cash</td>
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
                                                            <a href="employees.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">Siva</a></h2>
                                                                    </td>
                                                                    <td>9004034435</td>
                                                                    <td>100%</td>
                                                                    <td>154</td>
                                                                    <td>ORD004,ORD104</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Arun</a></h2>
                                                                    </td>
                                                                    <td>9578021977</td>
                                                                    <td>95%</td>
                                                                    <td>142</td>
                                                                    <td>ORD005</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Rahul</a></h2>
                                                                    </td>
                                                                    <td>9786773931</td>
                                                                    <td>90%</td>
                                                                    <td>145</td>
                                                                    <td>ORD104</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Arjun</a></h2>
                                                                    </td>
                                                                    <td>8647848344</td>
                                                                    <td>82%</td>
                                                                    <td>123</td>
                                                                    <td>ORD113,ORD116</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Mohan</a></h2>
                                                                    </td>
                                                                    <td>7492399234</td>
                                                                    <td>60%</td>
                                                                    <td>102</td>
                                                                    <td>ORD020</td>
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
                                                            <a href="tracking.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">ORD003</a></h2>
                                                                    </td>
                                                                    <td>Photo Selection</td>
                                                                    <td>22 Nov 2023 </td>
                                                                    <td>Client</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">ORD007</a></h2>
                                                                    </td>
                                                                    <td>Photo Editing</td>
                                                                    <td>26 Nov 2023 </td>
                                                                    <td>Bala</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">ORD011</a></h2>
                                                                    </td>
                                                                    <td>Video Editing</td>
                                                                    <td>29 Nov 2023 </td>
                                                                    <td>Siva</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">ORD016</a></h2>
                                                                    </td>
                                                                    <td>Album Designing</td>
                                                                    <td>03 Dec 2023 </td>
                                                                    <td>Arun</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">ORD022</a></h2>
                                                                    </td>
                                                                    <td>Album Approval</td>
                                                                    <td>10 Dec 2023 </td>
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
                                                            <a href="tracking.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">ORD001</a></h2>
                                                                    </td>
                                                                    <td>Photo Selection</td>
                                                                    <td>14 Feb 2023 </td>
                                                                    <td>Client</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">ORD005</a></h2>
                                                                    </td>
                                                                    <td>Album Designing</td>
                                                                    <td>20 Apr 2023 </td>
                                                                    <td>Bala</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">ORD05</a></h2>
                                                                    </td>
                                                                    <td>Video Editing</td>
                                                                    <td>22 May 2023 </td>
                                                                    <td>Siva</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">ORD002</a></h2>
                                                                    </td>
                                                                    <td>Album Approval</td>
                                                                    <td>01 May 2023 </td>
                                                                    <td>Client</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">ORD003</a></h2>
                                                                    </td>
                                                                    <td>Photo Selection</td>
                                                                    <td>14 Aug 2023 </td>
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
                                                            <a href="leads.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">Siva</a></h2>
                                                                    </td>
                                                                    <td>9402002443</td>
                                                                    <td>Wedding</td>
                                                                    <td>17 Jan 2024</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Arun</a></h2>
                                                                    </td>
                                                                    <td>9786593001</td>
                                                                    <td>Birthday</td>
                                                                    <td>15 Dec 2023</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Rahul</a></h2>
                                                                    </td>
                                                                    <td>6488329933</td>
                                                                    <td>Wedding</td>
                                                                    <td>24 Feb 2024</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Siva</a></h2>
                                                                    </td>
                                                                    <td>8753834994</td>
                                                                    <td>Engagement</td>
                                                                    <td>17 Mar 2024</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Arun</a></h2>
                                                                    </td>
                                                                    <td>7849400323</td>
                                                                    <td>Wedding</td>
                                                                    <td>31 May 2024</td>
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
                                                            <a href="estimates.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">EST-145</a></h2>
                                                                    </td>
                                                                    <td>120000</td>
                                                                    <td>Karthick</td>
                                                                    <td>9400430341</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">EST-157</a></h2>
                                                                    </td>
                                                                    <td>120000</td>
                                                                    <td>Aisha</td>
                                                                    <td>8742899424</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">EST-162</a></h2>
                                                                    </td>
                                                                    <td>165000</td>
                                                                    <td>Anitha</td>
                                                                    <td>9400430341</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">EST-167</a></h2>
                                                                    </td>
                                                                    <td>200000</td>
                                                                    <td>Saranya</td>
                                                                    <td>6329824924</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">EST-170</a></h2>
                                                                    </td>
                                                                    <td>350000</td>
                                                                    <td>Vinoth</td>
                                                                    <td>7839393553</td>
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
                                                            <a href="equipments.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">SonyV12</a></h2>
                                                                    </td>
                                                                    <td>17 Sep 2023</td>
                                                                    <td>NB Makers</td>
                                                                    <td>9490234004</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Pixel 800</a></h2>
                                                                    </td>
                                                                    <td>08 Oct 2023</td>
                                                                    <td>Southern Lights</td>
                                                                    <td>7994203203</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Mark III</a></h2>
                                                                    </td>
                                                                    <td>12 Nov 2023</td>
                                                                    <td>CUB Specs</td>
                                                                    <td>8593933555</td>
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
                                                            <a href="vendors.php" className="btn btn-success btn-sm">View All</a>
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
                                                                        <h2><a href="#">Siva</a></h2>
                                                                    </td>
                                                                    <td>AB Photography</td>
                                                                    <td>Lights</td>
                                                                    <td>9300353533</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Ajay</a></h2>
                                                                    </td>
                                                                    <td>Mac Studios</td>
                                                                    <td>Photography</td>
                                                                    <td>6729494433</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Rahul</a></h2>
                                                                    </td>
                                                                    <td>Creative Studio</td>
                                                                    <td>Videography</td>
                                                                    <td>9764363466</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Siva</a></h2>
                                                                    </td>
                                                                    <td>Micro Photography</td>
                                                                    <td>Drone</td>
                                                                    <td>7894939344</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2><a href="#">Ajay</a></h2>
                                                                    </td>
                                                                    <td>Hypo Lights</td>
                                                                    <td>Lights</td>
                                                                    <td>6498948944</td>
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