import {
    Icon,
    Tooltip,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Favorites = ({ t, open }) => {
    const navigate = useNavigate();

    return (
        <Tooltip placement="right" title={t('FAVORITES')}>
            <ListItem disablePadding>
                <ListItemButton
                    sx={{
                        px: 2.5,
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center'
                    }}
                    onClick={() => navigate('WeatherApp/favorites')}>
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 1.5 : 'auto',
                            justifyContent: 'center'
                        }}>
                        <Icon color='primary'>favorite</Icon>
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            whiteSpace: 'nowrap',
                            opacity: open ? 1 : 0
                        }}
                        primary={t('FAVORITES')} />
                </ListItemButton>
            </ListItem>
        </Tooltip>
    );
};

export default Favorites;