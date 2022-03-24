import axios from "axios";

export const getPlacesData = async (boundingBox) => {
  const URL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

  let options = {
    method: "GET",
    url: URL,
    params: {
      bl_latitude: "11.847676",
      tr_latitude: "12.838442",
      bl_longitude: "109.095887",
      tr_longitude: "109.149359",
      restaurant_tagcategory_standalone: "10591",
      restaurant_tagcategory: "10591",
      limit: "30",
      currency: "USD",
      open_now: "false",
      lunit: "km",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const {
        data: { data: data },
      } = response;

      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
