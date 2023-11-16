// components/Episode.js
import React from 'react';

const Episode = ({ episode }) => {
  return (
    <div>
      <h4>{episode.title}</h4>
      <p>{episode.description}</p>
      {/* Add audio player or link to play the episode */}
    </div>
  );
};

export default Episode;
