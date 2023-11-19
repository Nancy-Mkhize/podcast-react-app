// components/PodcastList.js
import React from 'react';
import { Link } from 'react-router-dom';

const PodcastList = ({ podcasts }) => {
  return (
    <div>
      <h2>Podcasts</h2>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <Link to={`/podcast/${podcast.id}`}>
              <h3>{podcast.title}</h3>
            </Link>
            <p>{podcast.description}</p>
            {/* Add more details or styling as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
