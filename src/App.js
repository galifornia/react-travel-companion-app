import { CssBaseline, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api/index';
import useDebounce from './hooks/debounce';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const debounceBounds = useDebounce(bounds, 1500); // Make sure we do not call API that often

  useEffect(() => {
    // Try to geolocate user on FTU
    navigator?.geolocation?.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating, places]);

  useEffect(() => {
    if (!debounceBounds || !debounceBounds.sw || !debounceBounds.ne) return;
    setIsLoading(true);

    getPlacesData(type, debounceBounds.sw, debounceBounds.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, debounceBounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length > 0 ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          {coordinates && (
            <Map
              setChildClicked={setChildClicked}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              places={filteredPlaces.length > 0 ? filteredPlaces : places}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
