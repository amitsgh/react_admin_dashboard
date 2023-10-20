import Admin from 'pages/Admin';
import Breakdown from 'pages/Breakdown';
import Customers from 'pages/Customers';
import Daily from 'pages/Daily';
import Dashboard from 'pages/Dashboard';
import ErrorPage from 'pages/ErrorPage';
import Geography from 'pages/Geography';
import Layout from 'pages/Layout';
import Monthly from 'pages/Monthly';
import Overview from 'pages/Overview';
import Performance from 'pages/Performance';
import Products from 'pages/Products';
import Transactions from 'pages/Transactions';

import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace={true} />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/customers',
                element: <Customers />,
            },
            {
                path: '/transactions',
                element: <Transactions />,
            },
            {
                path: '/geography',
                element: <Geography />,
            },
            {
                path: '/overview',
                element: <Overview />,
            },
            {
                path: '/daily',
                element: <Daily />,
            },
            {
                path: '/monthly',
                element: <Monthly />,
            },
            {
                path: '/breakdown',
                element: <Breakdown />,
            },
            {
                path: '/admin',
                element: <Admin />,
            },
            {
                path: '/performance',
                element: <Performance />,
            },
        ],
    },
]);

export default router;
