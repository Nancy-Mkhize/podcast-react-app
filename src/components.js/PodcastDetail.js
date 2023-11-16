import React, { useState, useEffect } from 'react';
import SeasonList from './SeasonList';
import { fetchPodcast } from '../api';

const PodcastDetail = ({ match }) => {
  const [podcast, setPodcast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const podcastId = match.params.id;

  useEffect(() => {
    fetchPodcast(podcastId).then(data => {
      setPodcast(data);
      setIsLoading(false);
    });
  }, [podcastId]);

  if (!podcast) return null;

  return (
    <div>
      <h1>{podcast.title}</h1>
      {isLoading && <p>Loading podcast details...</p>}
      {!isLoading && <SeasonList seasons={podcast.seasons} />}
    </div>
  );
};

export default PodcastDetail;
