// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { fetchShows } from './services/api';
import ShowDetails from './components/ShowDetails';

const App = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchShows();
        setShows(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Switch>
            <Route exact path="/">
              {/* Display list of shows */}
              {shows.map((show) => (
                <div key={show.id}>
                  <Link to={`/show/${show.id}`}>{show.title}</Link>
                </div>
              ))}
            </Route>
            <Route path="/show/:showId" component={ShowDetails} />
          </Switch>
        )}
      </div>
    </Router>
  );
};

export default App;
