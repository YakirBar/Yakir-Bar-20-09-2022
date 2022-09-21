import {
    Icon,
    Tooltip,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from '@mui/material';
import { ToggleTheme } from '../store/weatherSlice';
import { useSelector, useDispatch } from 'react-redux';

const Theme = ({ t, open }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.weatherSlice.theme);

    return (
        <Tooltip placement="right" title={t(theme ? 'LIGHT_MODE' : "DARK_MODE")}>
            <ListItem disablePadding >
                <ListItemButton
                    sx={{
                        px: 2.5,
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center'
                    }}
                    onClick={() => dispatch(ToggleTheme())}>
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 1.5 : 'auto',
                            justifyContent: 'center'
                        }}>
                        <Icon color='primary'>{theme ? 'light_mode' : 'dark_mode'}</Icon>
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            whiteSpace: 'nowrap',
                            opacity: open ? 1 : 0
                        }}
                        primary={t(theme ? 'LIGHT_MODE' : "DARK_MODE")} />
                </ListItemButton>
            </ListItem>
        </Tooltip>
    );
};

export default Theme;