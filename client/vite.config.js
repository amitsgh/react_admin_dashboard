import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
            assets: '/src/assets',
            components: '/src/components',
            data: '/src/data',
            hooks: '/src/hooks',
            pages: '/src/pages',
            reducers: '/src/reducers',
            routers: '/src/routers',
        },
    },

    // define: {
    //     'import.meta.env.VITE_BASE_URL': JSON.stringify(
    //         process.env.VITE_BASE_URL
    //     ),
    //     'import.meta.env.VITE_USER_ID': JSON.stringify(
    //         process.env.VITE_USER_ID
    //     ),
    // },
});
