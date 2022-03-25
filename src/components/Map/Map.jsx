import { Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import GoogleMapReact from "google-map-react";
import React from "react";

import { v4 as uuidv4 } from "uuid";

import useStyles from "./styles";

const Map = ({ coordinates, setCoordinates, setBounds, restaurants }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const DEFAULT_IMG_URL =
    "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg";

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coordinates}
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
            restaurant.latitude &&
            restaurant.longitude && (
              <div
                key={uuidv4()}
                className={classes.markerContainer}
                lat={Number(restaurant.latitude)}
                lng={Number(restaurant.longitude)}
              >
                {!isDesktop ? (
                  <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography
                      className={classes.typography}
                      variant="subtitle2"
                      gutterBottom
                    >
                      {restaurant.name}
                    </Typography>
                    <img
                      className={classes.pointer}
                      src={
                        restaurant.photo
                          ? restaurant.photo.images.large.url
                          : DEFAULT_IMG_URL
                      }
                      alt={classes.name}
                    />
                    <Rating
                      size="small"
                      value={Number(restaurant.rating)}
                      readOnly
                    />
                  </Paper>
                )}
              </div>
            )
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
