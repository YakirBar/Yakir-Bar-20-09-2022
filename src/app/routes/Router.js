import { useEffect } from 'react';
import { Search, Details, Favorites } from '../pages';
import { Routes, Route, useNavigate } from "react-router-dom";

const Router = (props) => {
    const navigate = useNavigate();

    const Unauthorized = () => {
        useEffect(() => {
            setTimeout(navigate('WeatherApp'));
        }, []);
    };

    return (
        <Routes>
            <Route path="*" element={<Unauthorized />} />
            <Route path="https://yakirbar.github.io/Yakir-Bar-20-09-2022" element={<Search {...props} />} />
            <Route path="https://yakirbar.github.io/Yakir-Bar-20-09-2022/favorites" element={<Favorites {...props} />} />
            <Route path="https://yakirbar.github.io/Yakir-Bar-20-09-2022/:localizedName" element={<Details {...props} />} />
        </Routes>
    );
};

export default Router;