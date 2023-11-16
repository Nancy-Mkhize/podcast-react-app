import React from 'react';
import SeasonListItem from './SeasonListItem';

const SeasonList = ({ seasons }) => {
  return (
    <ul>
      {seasons.map(season => (
        <SeasonListItem key={season.id} season={season} />
      ))}
    </ul>
  );
};

export default SeasonList;
