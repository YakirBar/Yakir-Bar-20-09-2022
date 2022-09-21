import { useEffect } from 'react';
import { Search, Details, Favorites } from '../pages';
import { Routes, Route, useNavigate } from "react-router-dom";

const Router = (props) => {
    // const navigate = useNavigate();

    // const Unauthorized = () => {
    //     useEffect(() => {
    //         setTimeout(navigate('WeatherApp'));
    //     }, []);
    // };

    return (
        <Routes>
            {/* <Route path="*" element={<Unauthorized />} /> */}
            <Route path="/" element={<Search {...props} />} />
            <Route path="/favorites" element={<Favorites {...props} />} />
            <Route path="/:localizedName" element={<Details {...props} />} />
        </Routes>
    );
};

export default Router;