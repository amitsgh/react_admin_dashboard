import axios from 'axios';
import { useQuery } from 'react-query';

// const baseUrl = import.meta.env.VITE_BASE_URL;

const getUser = (id) => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async (id) => {
            
        }
    });
};

const useApi = () => ({
    getUser,
});

export default useApi;
