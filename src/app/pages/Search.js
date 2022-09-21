import {
    Box,
    Icon,
    Card,
    Tooltip,
    TextField,
    IconButton,
    Typography
} from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Search = ({ t, setErrMessage }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [locationAutocomplete, setLocationAutocomplete] = useState();

    useEffect(() => {
        if (search) {
            axios.get(`${process.env.REACT_APP_BASE_URL_LOCATION_AUTOCOMPLETE}?apikey=${process.env.REACT_APP_API_KEY}&q=${search}`)
                .then((res) => setLocationAutocomplete(res.data))
                .catch((err) => setErrMessage(err.message))
        }
    }, [search]);

    return (
        <Box
            sx={{
                height: '100vh',
                color: 'text.primary',
                bgcolor: 'background.default'
            }}
            className='flex items-center flex-col'>
            <TextField
                size='small'
                sx={{ mt: 15 }}
                value={search}
                className='lg:w-1/3 w-1/2'
                autoComplete='off'
                placeholder={t('SEARCH')}
                onChange={(event) => setSearch(event.target.value)}
                InputProps={{
                    startAdornment: (
                        <Icon color='primary' sx={{ mr: 1, fontSize: 21 }}>search</Icon>
                    ),
                    endAdornment: (
                        search &&
                        <Tooltip title={t('CLEAR')}>
                            <IconButton onClick={() => setSearch('')}>
                                <Icon color='primary' sx={{ fontSize: 21 }}>highlight_off</Icon>
                            </IconButton>
                        </Tooltip>
                    ),
                }}
            />
            {locationAutocomplete && (
                <Card elevation={2} className='p-4 mt-4 lg:w-1/3 w-1/2'>
                    {locationAutocomplete?.length > 0 ?

                        locationAutocomplete.map((location, index) => (
                            <Box className='flex items-center justify-between'>
                                <Typography key={index} variant='subtitle1' className='py-2 cursor-pointer'
                                    onClick={() => navigate(`${location.LocalizedName}`, { state: { key: parseInt(location.Key), name: location.LocalizedName } })}>
                                    {`${location.LocalizedName}, ${location.Country.LocalizedName}`}
                                </Typography>
                                <Icon color='primary' sx={{ fontSize: 21 }}>location_on</Icon>
                            </Box>
                        )) : <Typography>{t('NO_RESULTS')}</Typography>}
                </Card>
            )}
        </Box>
    );
};

export default Search;