import React from 'react';
import { Link } from 'react-router-dom';

const PodcastListItem = ({ podcast }) => {
  return (
    <li>
      <Link to={`/podcast/${podcast.id}`}>{podcast.title}</Link>
    </li>
  );
};

export default PodcastListItem;
