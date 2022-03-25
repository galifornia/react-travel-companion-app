import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

import { v4 as uuidv4 } from "uuid";
import { LocationOn, Phone } from "@material-ui/icons";

const PlaceDetails = ({
  name,
  address,
  phone,
  photo,
  price_level,
  ranking,
  cuisine,
  awards,
  web_url,
  website,
}) => {
  const classes = useStyles();
  const DEFAULT_CARD_IMG_URL =
    "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg";

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={photo ? photo.images.large.url : DEFAULT_CARD_IMG_URL}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Box display="flex" justifyContent={"space-between"}>
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent={"space-between"}>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {ranking}
          </Typography>
        </Box>
        {awards &&
          awards.map((award) => (
            <Box
              key={uuidv4()}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={1}
            >
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_name}
              </Typography>
            </Box>
          ))}

        {cuisine &&
          cuisine.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}

        {address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <LocationOn />
            <Typography variant="body2" style={{ paddingLeft: "8px" }}>
              {address}
            </Typography>
          </Typography>
        )}

        {phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <Phone /> {phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
