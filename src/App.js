import { CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/index";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    // Try to geolocate user on FTU
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (!bounds || !bounds.sw || !bounds.ne) return;
    getPlacesData(bounds.sw, bounds.ne).then((data) => setRestaurants(data));
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
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
