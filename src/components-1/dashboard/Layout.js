import React from 'react'
import './Layout.css'
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            {/* Main Wrapper */}
            <div className="main-wrapper">
                {/* Header */}
                <Header />
                {/* /Header */}
                {/* Sidebar */}
                <Sidebar />
                {/* /Sidebar */}
                {/* Page Wrapper */}
                <Outlet />
                {/* /Page Wrapper */}
            </div>
            {/* /Main Wrapper */}

        </div>
    )
}

export default Layout