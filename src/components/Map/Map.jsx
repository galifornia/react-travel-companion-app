import { Grid, useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import React from "react";

import useStyles from "./styles";

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  const { lat: lat, lng: lng } = coordinates;

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={{ lat, lng }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={[]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => console.log("clicking in child")}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
