import {
    Icon,
    Select,
    Tooltip,
    ListItem,
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const ToggleLanguage = ({ t, open }) => {
    const { i18n } = useTranslation();

    return (
        <Tooltip placement="right" title={t('LANGUAGES')}>
            <ListItem
                disablePadding
                sx={{
                    px: 2.5,
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center'
                }}>
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 1.5 : 'auto',
                        justifyContent: 'center'
                    }}>
                    <Icon color='primary'>language</Icon>
                </ListItemIcon>
                <ListItemText
                    sx={{
                        whiteSpace: 'nowrap',
                        opacity: open ? 1 : 0
                    }}
                    primary={
                        <Select
                            disableUnderline
                            className='w-auto'
                            variant='standard'
                            value={i18n.language}
                            onChange={(event) => i18n.changeLanguage(event.target.value)}
                        >
                            <MenuItem value={'he'}>{t('HEBREW')}</MenuItem>
                            <MenuItem value={'en'}>{t('ENGLISH')}</MenuItem>
                        </Select>
                    } />
            </ListItem>
        </Tooltip>
    );
};

export default ToggleLanguage;