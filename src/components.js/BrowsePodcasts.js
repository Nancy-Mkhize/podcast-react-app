import React, { useState, useEffect } from 'react';
import PodcastList from './PodcastList';
import { fetchPodcasts } from '../api';

const BrowsePodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPodcasts().then(data => {
      setPodcasts(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Browse Podcasts</h1>
      {isLoading && <p>Loading podcasts...</p>}
      {!isLoading && <PodcastList podcasts={podcasts} />}
    </div>
  );
};

export default BrowsePodcasts;
