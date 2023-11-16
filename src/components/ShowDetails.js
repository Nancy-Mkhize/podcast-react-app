// components/ShowDetails.js
import React from 'react';

const ShowDetails = ({ match }) => {
  const { params } = match;
  // Fetch show details using params.showId and display the information
  return <div>Show Details for Show ID: {params.showId}</div>;
};

export default ShowDetails;
