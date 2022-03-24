import { useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import React from "react";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const coordinates = { lat: 0, lng: 0 };
  const places = [
    { name: "Primero" },
    { name: "Segundo" },
    { name: "Tercero" },
    { name: "ZZZz" },
    { name: "TT" },
    { name: "DDDD" },
    { name: "WWWW" },
    { name: "GGG" },
    { name: "MMMMM" },
  ];

  const isMobile = useMediaQuery("(min-width: 600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={[]}
        onChange={() => console.log("changing")}
        onChildClick={() => console.log("clicking in child")}
      >
        {places.map((place, i) => {
          return <PlaceDetails key={i} {...place} />;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
