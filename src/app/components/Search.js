import {
    Icon,
    Tooltip,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Search = ({ t, open }) => {
    const navigate = useNavigate();

    return (
        <Tooltip placement="right" title={t('SEARCH')}>
            <ListItem disablePadding>
                <ListItemButton
                    sx={{
                        px: 2.5,
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center'
                    }}
                    onClick={() => navigate('/')}>
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 1.5 : 'auto',
                            justifyContent: 'center'
                        }}>
                        <Icon color='primary'>search</Icon>
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            whiteSpace: 'nowrap',
                            opacity: open ? 1 : 0
                        }}
                        primary={t('SEARCH')} />
                </ListItemButton>
            </ListItem>
        </Tooltip>
    );
};

export default Search;