// components/SeasonView.js
import React from 'react';

const SeasonView = ({ season }) => {
  return (
    <div>
      <h3>Season {season.number}</h3>
      {season.episodes.map((episode) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default SeasonView;
