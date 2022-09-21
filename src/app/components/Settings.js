import { useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { Divider, Icon, IconButton, List } from '@mui/material';
import { Rate, Theme, Metric, Search, Powered, Forecast, Language, Favorites } from './index';

const openedMixin = (theme) => ({
    width: 190,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1.5),
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Settings = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={() => setOpen(!open)}>
                    <Icon color='primary'>{open ? 'chevron_left' : 'settings'}</Icon>
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <Search {...props} open={open} />
                <Favorites {...props} open={open} />
                <Divider />
                <Forecast {...props} open={open} />
                <Language {...props} open={open} />
                <Metric {...props} open={open} />
                <Theme {...props} open={open} />
                <Divider />
                <Rate {...props} open={open} />
                <Divider sx={{ mt: {
                    xl: 58,
                    lg: 58,
                    md: 44,
                    sm: 46,
                    xs: 47
                } }} />
                <Powered {...props} open={open} />
            </List>
        </Drawer>
    );
};

export default Settings;