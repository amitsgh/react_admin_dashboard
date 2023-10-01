import axios from 'axios';
import { QueryClient } from 'react-query';

const baseUrl = import.meta.env.VITE_BASE_URL;

const defaultQueryFn = async ({ queryKey }) => {
    const { data } = await axios.get(`${baseUrl}${queryKey[0]}`);
    return data;
};

const queryClinet = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
        },
    },
});

export default queryClinet;
