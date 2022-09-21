import axios from 'axios';
import moment from 'moment';
import lottie from 'lottie-web';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteSlice } from '../store/weatherSlice';
import { FindAnimation } from '../functions/FindAnimation';
import { Box, Card, Icon, IconButton, Tooltip, Typography } from '@mui/material';

const Details = ({ t, setErrMessage }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const container = useRef(null);
    const { i18n } = useTranslation();
    require("moment/min/locales.min");
    const locationKey = location?.state?.key;
    const localizedName = location?.state?.name;
    const [dailyForecast, setDailyForecast] = useState();
    const [currentWeather, setCurrentWeather] = useState();
    const metric = useSelector(state => state.weatherSlice.metric);
    const forecast = useSelector(state => state.weatherSlice.forecast);
    const favorites = useSelector(state => state.weatherSlice.favorites);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL_CURRENT_WEATHER}/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`)
            .then((res) => setCurrentWeather(res.data[0]))
            .catch((err) => setErrMessage(err.message));

        axios.get(`${process.env.REACT_APP_BASE_URL_DAILY_FORECAST}/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=${metric}`)
            .then((res) => setDailyForecast(res.data.DailyForecasts.slice(0, forecast)))
            .catch((err) => setErrMessage(err.message));

        lottie.loadAnimation({
            loop: true,
            autoplay: true,
            renderer: 'svg',
            container: container.current,
            animationData: FindAnimation(currentWeather?.WeatherIcon)
        })
        return () => lottie.destroy();
    }, [locationKey]);

    return (
        <Box
            className='flex justify-center'
            sx={{
                height: '100vh',
                color: 'text.primary',
                bgcolor: 'background.default'
            }}>
            <Card
                elevation={4}
                sx={{
                    py: 2,
                    mt: {
                        xl: 18,
                        lg: 18,
                        md: 20,
                        sm: 15,
                        xs: 3
                    },
                    width: '55%',
                    height: {
                        xl: '70vh',
                        lg: '70vh',
                        md: '53vh',
                        sm: '79vh',
                        xs: '95vh'
                    }
                }} >
                <Box className='flex flex-col items-center'>
                    <Tooltip title={favorites.filter(favorite => favorite.Key === locationKey)[0] ? t('REMOVE_LOCATION') : t('ADD_LOCATION')}>
                        <IconButton
                            sx={{ ml: 2 }}
                            className='self-start'
                            onClick={() => { dispatch(FavoriteSlice({ Key: parseInt(locationKey), LocalizedName: localizedName })) }}>
                            <Icon color='primary' >{favorites.filter(favorite => favorite.Key === locationKey)[0] ? 'favorite' : 'favorite_border'}</Icon>
                        </IconButton>
                    </Tooltip>
                    <Box ref={container} sx={{ height: '20vh' }} />
                    <Typography variant='h5'>
                        {localizedName}
                    </Typography>
                    <Typography variant='h4' sx={{ mt: 1.5 }}>
                        {metric ?
                            parseInt(currentWeather?.Temperature?.Metric?.Value) :
                            parseInt(currentWeather?.Temperature?.Imperial?.Value)}<sup>o</sup> - {currentWeather?.WeatherText}
                    </Typography>
                    <Typography variant='subtitle2'>
                        {(currentWeather?.HasPrecipitation && currentWeather?.PrecipitationType) ?
                            `${t('PRECIPITATION_TYPE')} - ${currentWeather?.PrecipitationType}` : t('NO_PRECIPITATION')}
                    </Typography>
                </Box>
                <Box className='flex lg:flex-row flex-col justify-evenly items-center'>
                    {dailyForecast?.map((daily, index) => (
                        <Card
                            key={index}
                            elevation={4}
                            sx={{
                                py: 2,
                                mt: {
                                    xl: 7,
                                    lg: 7,
                                    md: 3,
                                    sm: 3,
                                    xs: 3
                                },
                                mx: 1,
                                width: {
                                    xl: '20%',
                                    lg: '20%',
                                    md: '80%',
                                    sm: '70%',
                                    xs: '70%'
                                },
                                height: {
                                    xl: '25vh',
                                    lg: '25vh',
                                    md: '9vh',
                                    sm: '7vh',
                                    xs: '8vh'
                                }
                            }}>
                            <Box className='flex flex-col items-center'>
                                <Typography variant='subtitle2'>
                                    {moment(daily?.Date).locale(i18n.language).format('dddd')}
                                </Typography>
                                <Typography variant='h6'>
                                    {parseInt(daily?.Temperature?.Minimum?.Value)}<sup>o</sup> - {parseInt(daily?.Temperature?.Maximum?.Value)}<sup>o</sup>
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant='subtitle1' className='flex flex-col items-center'>
                                    {t("DAY")}
                                    <Typography variant='subtitle2'>
                                        {daily?.Day?.IconPhrase}
                                    </Typography>
                                </Typography>
                                <Typography variant='subtitle1' className='flex flex-col items-center'>
                                    {t("NIGHT")}
                                    <Typography variant='subtitle2'>
                                        {daily?.Night?.IconPhrase}
                                    </Typography>
                                </Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Card>
        </Box>
    );
};

export default Details;