// components/ShowDetails.js
import React, { useEffect, useState } from 'react';
import { fetchShowById } from '../services/api';
import PodcastList from './PodcastList';

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
      {/* Display other show details */}
      <PodcastList podcasts={show.previews} />
    </div>
  );
};

export default ShowDetails;
