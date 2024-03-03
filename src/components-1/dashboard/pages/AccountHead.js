import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

function AccountHead() {

    const columns = [
        {
            name: 'Customer Name',
            selector: row => row.cust_name,
            sortable: true
        },
        {
            name: 'Event',
            selector: row => row.Event,
            sortable: true
        },
        {
            name: 'Date',
            selector: row => row.occ_date,
            sortable: true
        },
        {
            name: 'Location',
            selector: row => row.location,
            sortable: true
        },
        {
            name: 'Actions',
            button: true,
            cell: (row) => (
                <>
                    <button
                        className="btn btn-success btn-sm"
                    >
                        Edit
                    </button>
                    < button
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button >
                </>
            ),
        }
    ];

    const data = [
        {
            id: 1,
            cust_name: 'Ram',
            Event: 'Pongal',
            occ_date: '27-02-2024',
            location: 'Guindy'
        },
        {
            id: 1,
            cust_name: 'Krishna',
            Event: 'Marriage',
            occ_date: '27-03-2024',
            location: 'Guindy'
        }
    ];

    const accountChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div id="snackbar" />
                {/* Page Content */}
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h3 className="page-title">Account Head</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="dashboard.php">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Account Head</li>
                                </ul>
                            </div>
                            <div className="col"></div>
                            <div className="col circle-btn">
                                <button className="btn btn-buttons floatRight" data-toggle="modal" data-target="#bulk_upload">
                                    Bulk Upload</button>
                                <Link to="#" className='floatRight' data-toggle="modal" data-target="#addOrders">
                                    <div className="circle-container">
                                        <div className="circle-div">+</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}


                    {/* <div class="row row-cards">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="card dash-widget">
                <div class="card-body">
                  <span class="dash-widget-icon"><i class="text-success icon-Credit-Card2"></i></span>
                  <div class="dash-widget-info">
                    <h3>834000</h3>
                    <span>Total Revenue</span>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="card dash-widget">
                <div class="card-body">
                  <span class="dash-widget-icon"><i class="text-info icon-Credit-Card2"></i></span>
                  <div class="dash-widget-info">
                    <h3>515000</h3>
                    <span>Total Expense</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="card dash-widget">
                <div class="card-body">
                  <span class="dash-widget-icon"><i class="text-warning icon-Coin"></i></span>
                  <div class="dash-widget-info">
                    <h3>319000</h3>
                    <span>Total Profit</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="card dash-widget">
                <div class="card-body">
                  <span class="dash-widget-icon"><i class="text-danger icon-Coins-2"></i></span>
                  <div class="dash-widget-info">
                    <h3>142000</h3>
                    <span>Total Due</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


                    <div className="row">
                        <div className="col-md-12">
                            {/* Search Filter */}
                            <div className="row filter-row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <input type="text" className="form-control floating" placeholder='Search Event' />
                                        <label className="focus-label">Event</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <input type="date" className="form-control floating" />
                                        <label className="focus-label">From</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <input type="date" className="form-control floating" />
                                        <label className="focus-label">To</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <Link to="#" className="btn btn-success btn-block"> Search </Link>
                                </div>
                            </div>
                            {/* /Search Filter */}

                            <div className="table-responsive">
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    fixedHeader
                                    pagination
                                >
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </div>
            {/* /Page Wrapper */}

            <div id="addOrders" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="addForm">
                                <div className="row">
                                    <div className="col-md-6 csource">
                                        <div className="form-group">
                                            <label className="col-form-label">Account Type</label>
                                            <select className="form-control" id="lead_status" name="acc_type" onChange={accountChange}>
                                                <option selected>Select Account</option>
                                                <option value="Customer">Customer</option>
                                                <option value="Supplier">Supplier</option>
                                                <option value="Vendor">Vendor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 cmobile">
                                        <div className="form-group">
                                            <label className="col-form-label">Customer Name<span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" name="cust_name" />
                                            <span className="error-message" id="mobileErr" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 cmobile">
                                        <div className="form-group">
                                            <label className="col-form-label">Company Name<span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" name="comp_name" />
                                            <span className="error-message" id="mobileErr" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 cmobile">
                                        <div className="form-group">
                                            <label className="col-form-label">Contact Person<span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" name="contact_person" />
                                            <span className="error-message" id="mobileErr" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ccontact">
                                        <div className="form-group">
                                            <label className="col-form-label">Full Address</label>
                                            <input className="form-control" type="text" name="address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ccontact">
                                        <div className="form-group">
                                            <label className="col-form-label">City</label>
                                            <input className="form-control" type="text" name="city" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ccontact">
                                        <div className="form-group">
                                            <label className="col-form-label">State</label>
                                            <input className="form-control" type="text" name="state" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ccontact">
                                        <div className="form-group">
                                            <label className="col-form-label">Pincode</label>
                                            <input className="form-control" type="text" name="pincode" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ccontact">
                                        <div className="form-group">
                                            <label className="col-form-label">Mobile Number</label>
                                            <input className="form-control" type="text" name="mobile" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ccontact">
                                        <div className="form-group">
                                            <label className="col-form-label">Email</label>
                                            <input className="form-control" type="email" name="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ccontact">
                                        <div className="form-group">
                                            <label className="col-form-label">GST No</label>
                                            <input className="form-control" type="text" name="gstno" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="col-form-label">Active Status <span className="text-danger">*</span></label>
                                            <select className="form-control" id="status" name="active_status">
                                                <option value>Select Status</option>
                                                <option value={1}>Active</option>
                                                <option value={0}>Inactive</option>
                                            </select>
                                            <span className="error-message" id="statusErr" />
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="bulk_upload" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Bulk Upload</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="upload.php" encType="multipart/form-data" method="post">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="hidden" className name="userid" id="userid" defaultValue />
                                        <label className="col-form-label">Upload File (.CSV)</label>
                                        <input className="form-control" type="file" name="file" />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="submit-section" style={{ textAlign: 'left' }}>
                                            <button className="btn btn-primary" type="submit" name="update" value="update">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default AccountHead