// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://podcast-api.netlify.app/shows',
});

export const fetchShows = () => api.get('/shows');
export const fetchShowById = (id) => api.get(`/id/${id}`);
