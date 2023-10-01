import {
    DarkModeOutlined,
    LightModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
} from '@mui/icons-material';
import {
    AppBar,
    IconButton,
    InputBase,
    Toolbar,
    useTheme,
} from '@mui/material';
import FlexBtw from 'components/ui/FlexBtw';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'reducers/theme/themeSlice';

const NavBar = ({ isSideBarOpen, setSideBarOpen }) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    const handleDrawerOpen = () => {
        setSideBarOpen(true);
    };

    return (
        <AppBar
            sx={{
                position: 'static',
                background: 'none',
                boxShadow: 'none',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* LEFT SIDE */}
                <FlexBtw>
                    <IconButton
                        onClick={handleDrawerOpen}
                        aria-label="Open Drawer"
                        edge="start"
                        sx={{
                            mr: 2,
                            ...(isSideBarOpen && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <FlexBtw
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="9px"
                        gap="3rem"
                        p="0.1rem 1.5rem"
                        aria-label="Search Section"
                    >
                        <InputBase
                            placeholder="Search..."
                            aria-label="Search Input"
                        />
                        <IconButton aria-label="Search Button">
                            <Search />
                        </IconButton>
                    </FlexBtw>
                </FlexBtw>

                {/* RIGHT SIDE */}
                <FlexBtw>
                    <IconButton
                        onClick={handleThemeToggle}
                        aria-label="Toggle Theme"
                    >
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined sx={{ fontSize: '25px' }} />
                        ) : (
                            <LightModeOutlined sx={{ fontSize: '25px' }} />
                        )}
                    </IconButton>
                    <IconButton aria-label="Settings">
                        <SettingsOutlined sx={{ fontSize: '25px' }} />
                    </IconButton>
                </FlexBtw>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
