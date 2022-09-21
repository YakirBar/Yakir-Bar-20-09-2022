import Router from './app/routes/Router';
import { useSelector } from 'react-redux';
import { Settings } from './app/components';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ShowMessage from './app/errors/ShowMessage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
    const { t } = useTranslation();
    const [errMessage, setErrMessage] = useState("");
    const theme = useSelector(state => state.weatherSlice.theme);

    const darkTheme = createTheme({
        palette: {
            mode: theme ? 'light' : 'dark',
            primary: {
                main: '#666699'
            }
        },
    });

    useEffect(() => {
        setTimeout(() => {
            setErrMessage('')
        }, 5000);
    }, [errMessage]);

    return (
        <ThemeProvider theme={darkTheme}>
            <Settings t={t} />
            <Router t={t} setErrMessage={setErrMessage} />
            {errMessage ? <ShowMessage t={t} message={errMessage} /> : null}
        </ThemeProvider>
    );
};

export default App;