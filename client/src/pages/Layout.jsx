import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';

import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';

const Layout = () => {
    const userId = import.meta.env.VITE_USER_ID;
    const {data: user} = useQuery(`/general/user/${userId}`);

    const isNotMobileView = useMediaQuery('(min-width: 600px)');
    const [isSideBarOpen, setSideBarOpen] = useState(true);

    return (
        <div>
            <Box
                display={isNotMobileView ? 'flex' : 'block'}
                width="100%"
                height="100%"
            >
                <SideBar
                    user={user || {}}
                    isNotMobileView={isNotMobileView}
                    drawerWidth="250px"
                    isSideBarOpen={isSideBarOpen}
                    setSideBarOpen={setSideBarOpen}
                />
                <Box flexGrow={1}>
                    <NavBar
                        user={user || {}}
                        isSideBarOpen={isSideBarOpen}
                        setSideBarOpen={setSideBarOpen}
                    />
                    <Outlet />
                </Box>
            </Box>
        </div>
    );
};

export default Layout;
