import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { createRef, useEffect, useState } from 'react';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { v4 as uuidv4 } from 'uuid';

const List = ({ places, childClicked, isLoading }) => {
  const classes = useStyles();
  const [filter, setFilter] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    if (!places) return;
    const refs = Array(places.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select
              value={filter}
              onChange={(ev) => setFilter(ev.target.value)}
            >
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            {/* TODO: replace Select with Slider */}
            <Select
              value={rating}
              onChange={(ev) => setRating(ev.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => {
              return (
                <Grid item key={i} ref={elRefs[i]} xs={12}>
                  <PlaceDetails
                    {...place}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
