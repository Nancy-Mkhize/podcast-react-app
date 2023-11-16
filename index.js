import { fetchPodcasts, fetchPodcast } from './api/endpoints';
import genres from './api/genres';

const apiService = {
  fetchPodcasts,
  fetchPodcast,
  genres,
};

export default apiService;
