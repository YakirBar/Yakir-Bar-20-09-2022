import {
    Icon,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from '@mui/material';

const Powered = ({ t, open }) => {
    return (
        <ListItem disablePadding >
            <ListItemButton
                sx={{
                    px: 2.5,
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center'
                }}
                onClick={() => window.open("https://www.linkedin.com/in/yakir-bar/", '_blank').focus()}>
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center'
                    }}>
                    <Icon color='primary'>code</Icon>
                </ListItemIcon>
                <ListItemText
                    sx={{
                        whiteSpace: 'nowrap',
                        opacity: open ? 1 : 0
                    }}
                    primary={t('POWERED_BY')}
                    primaryTypographyProps={{ fontSize: '12px' }} />
            </ListItemButton>
        </ListItem>
    );
};

export default Powered;