import ErrorPage from 'pages/ErrorPage';
import Layout from 'pages/Layout';
import Dashboard from 'pages/dashboard';
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
        ],
    },
]);

export default router;
