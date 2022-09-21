export const FindAnimation = (WeatherIcon) => {
    switch (WeatherIcon) {
        case 1: case 2: case 5: case 30: {
            return require('../animations/weather-sunny.json');
        }
        case 3: case 4: {
            return require('../animations/weather-partly-cloudy.json');
        }
        case 6: {
            return require('../animations/foggy.json');
        }
        case 7: case 32: {
            return require('../animations/weather-windy.json');
        }
        case 8: case 11: case 31: {
            return require('../animations/weather-mist.json');
        }
        case 12: case 18: case 24: case 26: case 29: {
            return require('../animations/weather-thunder.json');
        }
        case 13: case 14: {
            return require('../animations/weather-partly-shower.json');
        }
        case 15: {
            return require('../animations/weather-storm.json');
        }
        case 16: case 17: {
            return require('../animations/weather-storm-showers-day.json');
        }
        case 19: case 22: case 25: {
            return require('../animations/weather-snow.json');
        }
        case 20: case 21: case 23: {
            return require('../animations/weather-snow-sunny.json');
        }
        case 33: case 34: case 37: {
            return require('../animations/weather-night.json');
        }
        case 35: case 36: case 38: {
            return require('../animations/weather-cloudy-night.json');
        }
        case 39: case 40: case 41: case 42: {
            return require('../animations/weather-rainy-night.json');
        }
        case 43: case 44: {
            return require('../animations/weather-snow-night.json');
        }
        default:
            return require('../animations/weather-sunny.json');
    };
};