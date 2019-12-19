import axios from 'axios';

export const apollo = axios.get(`https://images-api.nasa.gov/search?q=apollo`);
