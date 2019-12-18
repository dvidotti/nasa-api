import axios from 'axios';

export const apollo = axios.get(`https://images-api.nasa.gov/search?q=apollo`);
export const apod = axios.get(`https://api.nasa.gov/planetary/apod?api_key=pgjNLJxAM3vEnBcOGWLCCyNHu3uany7lhBhfftoX`);

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY


//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-7-3&api_key=DEMO_KEY