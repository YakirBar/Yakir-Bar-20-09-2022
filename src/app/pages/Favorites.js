import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Card, Typography } from '@mui/material';

const Favorites = ({ t, setErrMessage }) => {
    const navigate = useNavigate();
    const [bigData, setBigData] = useState([]);
    const metric = useSelector(state => state.weatherSlice.metric);
    const favorites = useSelector(state => state.weatherSlice.favorites);

    useEffect(() => {
        if (favorites?.length > 0) {
            const getFavorites = async () => {
                const handleData = [];
                for (let i = 0; i < favorites?.length; i++) {
                    await axios.get(`${process.env.REACT_APP_BASE_URL_CURRENT_WEATHER}/${favorites[i].Key}?apikey=${process.env.REACT_APP_API_KEY}`)
                        .then((res) => {
                            const data = {
                                ...res.data[0],
                                Key: favorites[i]?.Key,
                                LocalizedName: favorites[i]?.LocalizedName
                            }
                            handleData.push(data)
                        })
                        .catch((err) => setErrMessage(err.message));
                };
                setBigData(handleData);
            };
            getFavorites();
        }
    }, [favorites]);

    return (
        <Box
            sx={{
                height: '100vh',
                color: 'text.primary',
                bgcolor: 'background.default'
            }}>
            <Box
                sx={{
                    p: 2,
                    ml: 8,
                }}
                className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 col-start-2'>
                {bigData?.length > 0 ?
                    bigData?.map((favorite) => (
                        <Card
                            elevation={4}
                            sx={{ p: 2 }}
                            className='cursor-pointer'
                            onClick={() => navigate(`https://yakirbar.github.io/WeatherApp/${favorite?.LocalizedName}`, { state: { key: parseInt(favorite?.Key), name: favorite?.LocalizedName } })}>
                            <Box className='flex items-center justify-between '>
                                <Typography variant='h5'>
                                    {metric ?
                                        parseInt(favorite?.Temperature?.Metric?.Value) :
                                        parseInt(favorite?.Temperature?.Imperial?.Value)}<sup>o</sup>
                                </Typography>
                                {favorite?.LocalizedName}
                            </Box>
                        </Card>
                    )) :
                    <Box className='flex items-center justify-center col-span-5'>
                        <Typography variant='h4'>{t("NO_FAVORITES")}</Typography>
                    </Box>}
            </Box>
        </Box>
    );
};

export default Favorites;