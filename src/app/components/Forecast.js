import {
    Icon,
    Select,
    Tooltip,
    ListItem,
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { DailyForecast } from '../store/weatherSlice';
import { useSelector, useDispatch } from 'react-redux';

const Forecast = ({ t, open }) => {
    const dispatch = useDispatch();
    const forecast = useSelector(state => state.weatherSlice.forecast);

    return (
        <Tooltip placement="right" title={t('FORECAST')}>
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
                    <Icon color='primary'>calendar_month</Icon>
                </ListItemIcon>
                <ListItemText
                    sx={{
                        whiteSpace: 'nowrap',
                        opacity: open ? 1 : 0
                    }}
                    primary={
                        <Select
                            value={forecast}
                            disableUnderline
                            variant='standard'
                            className='w-auto'
                            onChange={(event) => dispatch(DailyForecast(event.target.value))}
                        >
                            {[...Array(6)].map((val, index) => (
                                index !== 0 && <MenuItem value={index}>{index} {t('DAYS')}</MenuItem>
                            ))}
                        </Select>
                    } />
            </ListItem>
        </Tooltip>
    );
};

export default Forecast;