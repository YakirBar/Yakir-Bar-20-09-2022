import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'Weather-Metric',
    initialState: {
        theme: true,
        metric: true,
        forecast: 5,
        favorites: []
    },
    reducers: {
        ToggleTheme: state => {
            state.theme = !state.theme;
        },
        ToggleMetric: state => {
            state.metric = !state.metric;
        },
        DailyForecast: (state, action) => {
            state.forecast = action.payload;
        },
        FavoriteSlice: (state, action) => {
            const duplicate = state.favorites.filter(favorite => favorite.Key === action.payload.Key)[0];

            if (duplicate) {
                state.favorites = state.favorites.filter(favorite => favorite.Key !== action.payload.Key);
            } else {
                state.favorites.push({Key: action.payload.Key, LocalizedName: action.payload.LocalizedName});
            };
        }
    }
});

export const { ToggleTheme, ToggleMetric, DailyForecast, FavoriteSlice } = weatherSlice.actions;

export default weatherSlice.reducer;