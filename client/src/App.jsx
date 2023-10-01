import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { QueryClientProvider } from 'react-query';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import queryClinet from 'api';
import router from 'routers';
import { themeSettings } from './theme';

function App() {
    const themeMode = useSelector((state) => state.themeMode.mode);
    const theme = useMemo(
        () => createTheme(themeSettings(themeMode)),
        [themeMode]
    );

    return (
        <QueryClientProvider client={queryClinet}>
            <div className="app">
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </div>
        </QueryClientProvider>
    );
}

export default App;
