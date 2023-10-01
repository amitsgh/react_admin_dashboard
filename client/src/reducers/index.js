import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';

const store = configureStore({
    reducer: {
        themeMode: themeReducer,
    },
});

export default store;
