import axios from "axios";

const URL = 'https://openweathermap.org/data/2.5/weather';
const API_KEY = 'a7fd1e38f047943be1e8cfe365bf1b13'
export const fetchweather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}


