import axios from 'axios';
import { useQuery } from 'react-query';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5001';
axios.defaults.baseURL = BASE_URL;

const USER_ENDPOINT = '/general/user/';
const PRODUCTS_ENDPOINT = '/client/products/';
const CUSTOMERS_ENDPOINT = '/client/customers';
const TRANSACTIONS_ENDPOINT = '/client/transactions';
const GEOGRAPHY_ENDPOINT = '/client/geography';
const SALES_ENDPOINT = '/sales/sales';
const GEODATA_ENDPOINT = '/client/geo-data';
const ADMIN_ENDPOINT = '/management/admins';
const PERFORMANCE_ENDPOINT = '/management/performance/';
const DASHBOARD_ENDPOINT = '/general/dashboard/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        throw error;
    }
);

async function fetchData(url, params) {
    try {
        const response = await axiosInstance.get(url, { params });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

// general
export const useGetUserById = (userId) => {
    return useQuery(['user', userId], () =>
        fetchData(`${USER_ENDPOINT}${userId}`)
    );
};

export const useGetDashboard = () => {
    return useQuery(['dashboard'], () => fetchData(DASHBOARD_ENDPOINT));
};

// client
export const useGetProducts = () => {
    return useQuery(['products'], () => fetchData(PRODUCTS_ENDPOINT));
};

export const useGetCustomers = () => {
    return useQuery(['customers'], () => fetchData(CUSTOMERS_ENDPOINT));
};

export const useGetTransactions = ({ page, pageSize, sort, search }) => {
    return useQuery(
        ['transactions', page, pageSize, sort, search],
        () =>
            fetchData(TRANSACTIONS_ENDPOINT, { page, pageSize, sort, search }),
        { keepPreviousData: true }
    );
};

export const useGetGeography = () => {
    return useQuery(['geography'], () => fetchData(GEOGRAPHY_ENDPOINT));
};

export const useGetGeoData = () => {
    return useQuery(['geo-data'], () => fetchData(GEODATA_ENDPOINT));
};

// sales
export const useGetSales = () => {
    return useQuery(['sales'], () => fetchData(SALES_ENDPOINT));
};

// management
export const useGetAdmins = () => {
    return useQuery(['admins'], () => fetchData(ADMIN_ENDPOINT));
};

export const useGetPerformance = (userId) => {
    return useQuery(['performance', userId], async (userId) =>
        fetchData(`${PERFORMANCE_ENDPOINT}${userId}`)
    );
};
