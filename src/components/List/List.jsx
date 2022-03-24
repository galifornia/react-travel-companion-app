import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { v4 as uuidv4 } from "uuid";

const List = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [
    { name: "Chill Place" },
    { name: "Cool Place" },
    { name: "bad Place" },
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

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={filter} onChange={(ev) => setFilter(ev.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        {/* TODO: replace Select with Slider */}
        <Select value={rating} onChange={(ev) => setRating(ev.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => {
          return (
            <Grid item key={i} xs={12}>
              <Grid container spacing={3} className={classes.list}>
                {places.map((place) => {
                  return (
                    <Grid item key={uuidv4()} xs={12}>
                      <PlaceDetails {...place} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default List;
