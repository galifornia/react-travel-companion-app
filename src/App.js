import { CssBaseline, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api/index';
import useDebounce from './hooks/debounce';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const debounceBounds = useDebounce(bounds, 1000); // Make sure we do not call API that often

  useEffect(() => {
    // Try to geolocate user on FTU
    navigator?.geolocation?.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (!debounceBounds || !debounceBounds.sw || !debounceBounds.ne) return;

    getPlacesData(debounceBounds.sw, debounceBounds.ne).then((data) =>
      setRestaurants(data)
    );
  }, [debounceBounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={restaurants} />
        </Grid>
        <Grid item xs={12} md={8}>
          {coordinates && (
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              restaurants={restaurants}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
