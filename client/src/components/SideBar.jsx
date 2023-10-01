import {
    ChevronLeft,
    ChevronRight,
    ChevronRightOutlined,
    SettingsOutlined,
} from '@mui/icons-material';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from '@mui/material';
import profileImage from 'assets/profile.jpeg';
import { NavItems } from 'data';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBtw from './FlexBtw';

const SideBar = ({
    user,
    isNotMobileView,
    drawerWidth,
    isSideBarOpen,
    setSideBarOpen,
}) => {
    const [active, setActive] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    const COMPANY_NAME = 'ACME INC.';

    const handleDrawerClose = () => {
        setSideBarOpen(false);
    };

    useEffect(() => {
        setActive(location.pathname.substring(1));
    }, [location.pathname]);

    return (
        <Box>
            {isSideBarOpen && (
                <Drawer
                    open={isSideBarOpen}
                    variant="persistent"
                    anchor="left"
                    aria-label="Navigation Sidebar"
                    sx={{
                        position: 'relative',
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary[100],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: 'border-box',
                            borderWidth: isNotMobileView ? '0' : '2px',
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem .5rem 2rem 3rem">
                            <FlexBtw color={theme.palette.secondary.main}>
                                {/* COMPANY NAME */}
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-end"
                                    padding={theme.spacing(0, 1)}
                                    gap="0.5rem"
                                >
                                    <Typography variant="h4" fontWeight="bold">
                                        {COMPANY_NAME}
                                    </Typography>
                                </Box>

                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'ltr' ? (
                                        <ChevronLeft />
                                    ) : (
                                        <ChevronRight />
                                    )}
                                </IconButton>
                            </FlexBtw>
                        </Box>

                        <List>
                            {NavItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography
                                            key={text}
                                            sx={{
                                                m: '2.25rem 0 1rem 3rem',
                                            }}
                                            aria-label={text}
                                        >
                                            {text}
                                        </Typography>
                                    );
                                }

                                const lcText = text.toLowerCase();

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor:
                                                    active === lcText
                                                        ? theme.palette
                                                              .secondary[300]
                                                        : 'transparent',
                                                color:
                                                    active === lcText
                                                        ? theme.palette
                                                              .primary[600]
                                                        : theme.palette
                                                              .secondary[300],
                                            }}
                                            aria-label={text}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: '2rem',
                                                    color:
                                                        active === lcText
                                                            ? theme.palette
                                                                  .primary[600]
                                                            : theme.palette
                                                                  .secondary[300],
                                                }}
                                                aria-label={`${text} Icon`}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined
                                                    sx={{ ml: 'auto' }}
                                                />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>

                    <Box sx={{ mb: '2rem' }}>
                        <Divider />
                        <FlexBtw
                            textTransform="none"
                            gap="1rem"
                            m="1.5rem 2rem 0 3rem"
                        >
                            <Box
                                component="img"
                                alt="profile"
                                src={profileImage}
                                height="40px"
                                width="40px"
                                borderRadius="50%"
                                sx={{ objectFit: 'cover' }}
                            />
                            <Box textAlign="left">
                                <Typography
                                    fontWeight="bold"
                                    fontSize="0.9rem"
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontSize="0.8rem"
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user.occupation}
                                </Typography>
                            </Box>
                            <SettingsOutlined
                                sx={{
                                    color: theme.palette.secondary[300],
                                    fontSize: '25px ',
                                }}
                            />
                        </FlexBtw>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SideBar;
