import {
    ArrowDropDownOutlined,
    DarkModeOutlined,
    LightModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
} from '@mui/icons-material';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import profileImage from 'assets/profile.jpeg';
import FlexBtw from 'components/FlexBtw';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'reducers/theme/themeSlice';

const NavBar = ({ user, isSideBarOpen, setSideBarOpen }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const dispatch = useDispatch();
    const theme = useTheme();

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    const handleDrawerOpen = () => {
        setSideBarOpen(true);
    };

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

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

                    <FlexBtw>
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                textTransform: 'none',
                                gap: '1rem',
                            }}
                        >
                            <Box
                                component="img"
                                alt="profile"
                                src={profileImage}
                                height="32px"
                                width="32px"
                                borderRadius="50%"
                                sx={{ objectFit: 'cover' }}
                            />
                            <Box textAlign="left">
                                <Typography
                                    fontWeight="bold"
                                    fontSize="0.85rem"
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontSize="0.75rem"
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user.occupation}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined
                                sx={{
                                    color: theme.palette.secondary[300],
                                    fontSize: '25px',
                                }}
                            />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={isOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                    </FlexBtw>
                </FlexBtw>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
