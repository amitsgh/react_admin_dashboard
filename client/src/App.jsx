import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { themeSettings } from './theme';
import router from 'routers';

function App() {
    const themeMode = useSelector((state) => state.themeMode.mode);
    const theme = useMemo(
        () => createTheme(themeSettings(themeMode)),
        [themeMode]
    );

    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </div>
    );
}

export default App;
