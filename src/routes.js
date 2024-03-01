import React from 'react'

import Login from './components/Login';
import Layout from './components/dashboard/Layout';
import Dashboard from './components/dashboard/pages/Dashboard';
import Investments from './components/dashboard/pages/Investments';
import DailyWages from './components/dashboard/pages/DailyWages';
import Reports from './components/dashboard/pages/Reports';

import AddInvestments from './components/dashboard/subpages/AddInvestments';
import EditInvestments from './components/dashboard/subpages/EditInvestments';
import UploadInvestments from './components/dashboard/subpages/UploadInvestments';
import AddWages from './components/dashboard/subpages/AddWages';
import EditWages from './components/dashboard/subpages/EditWages';
import Profile from './components/dashboard/pages/Profile';

const routes = [
    {
        path: '/',
        index: true,
        element: <Login />
    },
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'admin',
                element: <Dashboard />
            },
            {
                path: 'investments',
                element: <Investments />,
            },
            {
                path: 'investments/add',
                element: <AddInvestments />
            },
            {
                path: 'investments/edit',
                element: <EditInvestments />
            },
            {
                path: 'investments/upload',
                element: <UploadInvestments />
            },
            {
                path: 'daily-wages',
                element: <DailyWages />
            },
            {
                path: 'daily-wages/add',
                element: <AddWages />
            },
            {
                path: 'daily-wages/edit',
                element: <EditWages />
            },
            {
                path: 'reports',
                element: <Reports />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ]
    }
];

export default routes