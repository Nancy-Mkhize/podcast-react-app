// components/ShowDetails.js
import React, { useEffect, useState } from 'react';
import { fetchShowById } from '../services/api';
import Episode from './Episode';



const ShowDetails = ({ match }) => {
  const { params } = match;
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetchShowById(params.showId);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [params.showId]);

  if (!show) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{show.title}</h2>
      {show.seasons.map((season) => (
        <div key={season.number}>
          <h3>Season {season.number}</h3>
          {season.episodes.map((episode) => (
            <Episode key={episode.id} episode={episode} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShowDetails;