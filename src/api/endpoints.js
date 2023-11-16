import axios from 'axios';

const apiUrl = 'https://podcast-api.netlify.app/shows	';

export const fetchPodcasts = () => {
  return axios.get(`${apiUrl}/shows`)
    .then(response => response.data);
};

export const fetchPodcast = (id) => {
  return axios.get(`${apiUrl}/id/${id}`)
    .then(response => response.data);
};
