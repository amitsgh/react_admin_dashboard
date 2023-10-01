import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
};

const themeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'; // Toggle the theme mode
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
