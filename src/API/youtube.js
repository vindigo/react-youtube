iport axios from 'axios';

const KEY = "AIzaSyBcledA4xCcplnIzED06OjFPYd3KmDwvws";

export default axios.creat({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5, 
    key: `${KEY}`
  }
})