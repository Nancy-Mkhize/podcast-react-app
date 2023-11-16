
const API_URL = 'https://podcast-api.netlify.app';

export async function fetchShows() {
  const response = await axios.get(`${API_URL}/shows`);
  return response.data;
}

export async function fetchShowDetails(showId) {
  const response = await axios.get(`${API_URL}/id/${showId}`);
  return response.data;
}

export async function fetchSeasonDetails(showId, seasonNumber) {
  const response = await axios.get(`${API_URL}/id/${showId}/seasons/${seasonNumber}`);
  return response.data;
}

export async function fetchEpisodeDetails(showId, seasonNumber, episodeId) {
  const response = await axios.get(`${API_URL}/id/${showId}/seasons/${seasonNumber}/episodes/${episodeId}`);
  return response.data;
}
