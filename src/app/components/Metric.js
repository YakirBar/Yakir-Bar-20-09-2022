import {
    Icon,
    Select,
    Tooltip,
    ListItem,
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { ToggleMetric } from '../store/weatherSlice';
import { useSelector, useDispatch } from 'react-redux';

const Metric = ({ t, open }) => {
    const dispatch = useDispatch();
    const metric = useSelector(state => state.weatherSlice.metric);

    return (
        <Tooltip placement="right" title={t('TEMPERATURES')}>
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
                    <Icon color='primary'>thermostat</Icon>
                </ListItemIcon>
                <ListItemText
                    sx={{
                        whiteSpace: 'nowrap',
                        opacity: open ? 1 : 0
                    }}
                    primary={
                        <Select
                            value={metric}
                            disableUnderline
                            variant='standard'
                            className='w-auto'
                            onChange={() => dispatch(ToggleMetric())}
                        >
                            <MenuItem value={true}>{t('CELSIUS')}</MenuItem>
                            <MenuItem value={false}>{t('FAHRENHEIT')}</MenuItem>
                        </Select>
                    } />
            </ListItem>
        </Tooltip>
    );
};

export default Metric;