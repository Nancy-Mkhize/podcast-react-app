import React from 'react';
import PodcastListItem from './PodcastListItem';

const PodcastList = ({ podcasts }) => {
  return (
    <ul>
      {podcasts.map(podcast => (
        <PodcastListItem key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  );
};

export default PodcastList;
