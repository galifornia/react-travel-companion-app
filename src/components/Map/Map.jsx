import { Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import GoogleMapReact from "google-map-react";
import React from "react";

import { v4 as uuidv4 } from "uuid";

import useStyles from "./styles";

const Map = ({ coordinates, setCoordinates, setBounds, restaurants }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  const { lat: lat, lng: lng } = coordinates;

  const DEFAULT_IMG_URL =
    "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg";

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
      >
        {restaurants?.map((restaurant) => {
          return (
            <div
              key={uuidv4()}
              className={classes.markerContainer}
              lat={Number(restaurant?.latitude)}
              lng={Number(restaurant?.lng)}
            >
              {isMobile ? (
                <LocationOnOutlined color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.Typography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {restaurant.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      restaurant.photo
                        ? restaurant.images.large.url
                        : DEFAULT_IMG_URL
                    }
                    alt={classes.name}
                  />
                </Paper>
              )}
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
