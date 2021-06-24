import axios from 'axios';

const BASE_PATH = process.env.VUE_APP_API_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

const upcommingMovies = async () => {
    const response = await axios.get(`${BASE_PATH}/upcoming?api_key=${API_KEY}`);
    return response.data.results;
};

const topRatedMovies = async () => {
    const response = await axios.get(`${BASE_PATH}/top_rated?api_key=${API_KEY}`);
    return response.data.results;
};

export default {
    topRatedMovies,
    upcommingMovies,
};
