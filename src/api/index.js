import axios from "axios";

export const getPlacesData = async (sw, ne) => {
  const URL =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

  let options = {
    method: "GET",
    url: URL,
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
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

  // return axios
  //   .request(options)
  //   .then(function (response) {
  //     const {
  //       data: { data: data },
  //     } = response;

  //     return data;
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  const data = [
    {
      location_id: "9982902",
      name: "Yolo Man Restaurant",
      latitude: "12.270622",
      longitude: "109.108154",
      num_reviews: "3",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Dien Dien, Khanh Hoa Province",
      photo: {
        images: {
          small: {
            width: "250",
            url: "https://media-cdn.tripadvisor.com/media/photo-f/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "144",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "50",
          },
          original: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "318",
          },
          large: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "318",
          },
          medium: {
            width: "438",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/35/c6/91/getlstd-property-photo.jpg",
            height: "254",
          },
        },
        is_blessed: true,
        uploaded_date: "2016-02-02T08:55:35-0500",
        caption: "getlstd_property_photo",
        id: "171296401",
        helpful_votes: "0",
        published_date: "2016-02-02T08:55:35-0500",
        user: {
          user_id: null,
          member_id: "0",
          type: "user",
        },
      },
      awards: [],
      doubleclick_zone: "as.vietnam",
      preferred_map_engine: "default",
      raw_ranking: "3.0589041709899902",
      ranking_geo: "Dien Dien",
      ranking_geo_id: "15296278",
      ranking_position: "1",
      ranking_denominator: "1",
      ranking_category: "restaurant",
      ranking: "#1 of 1 Restaurants in Dien Dien",
      distance: "8.213921327616687",
      distance_string: "8.2 km",
      bearing: "south",
      rating: "5.0",
      is_closed: false,
      open_now_text: "Closed Now",
      is_long_closed: false,
      price_level: "$$ - $$$",
      price: "$20,000 - $500,000",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g15296278-d9982902-Reviews-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g15296278-d9982902-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Dien Dien",
          abbrv: null,
          location_id: "15296278",
        },
        {
          subcategory: [
            {
              key: "province",
              name: "Province",
            },
          ],
          name: "Khanh Hoa Province",
          abbrv: null,
          location_id: "1184689",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "Vietnam",
          abbrv: null,
          location_id: "293921",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "sit_down",
          name: "Sit down",
        },
      ],
      parent_display_name: "Dien Dien",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 58 3772 279",
      website: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/",
      email: "thinn80@gmail.com",
      address_obj: {
        street1: "24 Dong Khoi",
        street2: null,
        city: "Dien Dien",
        state: null,
        country: "Vietnam",
        postalcode: "650000",
      },
      address: "24 Dong Khoi, Dien Dien 650000 Vietnam",
      hours: {
        week_ranges: [
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
          [
            {
              open_time: 540,
              close_time: 1380,
            },
          ],
        ],
        timezone: "Asia/Ho_Chi_Minh",
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10675",
          name: "Vietnamese",
        },
      ],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "11707706",
      name: "Kincafe - Salvaged Ring Dien Khanh",
      latitude: "12.264778",
      longitude: "109.10869",
      num_reviews: "1",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Nha Trang, Khanh Hoa Province",
      photo: {
        images: {
          small: {
            width: "150",
            url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/53/95/c9/getlstd-property-photo.jpg",
            height: "150",
          },
          thumbnail: {
            width: "50",
            url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/53/95/c9/getlstd-property-photo.jpg",
            height: "50",
          },
          original: {
            width: "2048",
            url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/53/95/c9/getlstd-property-photo.jpg",
            height: "1365",
          },
          large: {
            width: "1024",
            url: "https://media-cdn.tripadvisor.com/media/photo-w/0d/53/95/c9/getlstd-property-photo.jpg",
            height: "683",
          },
          medium: {
            width: "550",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/53/95/c9/getlstd-property-photo.jpg",
            height: "367",
          },
        },
        is_blessed: true,
        uploaded_date: "2016-10-17T00:15:19-0400",
        caption: "getlstd_property_photo",
        id: "223581641",
        helpful_votes: "3",
        published_date: "2016-10-17T00:15:19-0400",
        user: {
          user_id: null,
          member_id: "0",
          type: "user",
        },
      },
      awards: [],
      doubleclick_zone: "as.vietnam.khanh_hoa.nha_trang",
      preferred_map_engine: "default",
      raw_ranking: "3.0257067680358887",
      ranking_geo: "Nha Trang",
      ranking_geo_id: "293928",
      ranking_position: "543",
      ranking_denominator: "636",
      ranking_category: "restaurant",
      ranking: "#418 of 645 Restaurants in Nha Trang",
      distance: "8.843051774354308",
      distance_string: "8.8 km",
      bearing: "south",
      rating: "5.0",
      is_closed: false,
      open_now_text: "Closed Now",
      is_long_closed: false,
      price_level: "$",
      price: "$14,000 - $70,000",
      description:
        "Kincafe - Salvaged Ring Dien Khanh is one of the world's top 20 architecture 2014.",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g293928-d11707706-Reviews-Kincafe_Salvaged_Ring_Dien_Khanh-Nha_Trang_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g293928-d11707706-Kincafe_Salvaged_Ring_Dien_Khanh-Nha_Trang_Khanh_Hoa_Province.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Nha Trang",
          abbrv: null,
          location_id: "293928",
        },
        {
          subcategory: [
            {
              key: "province",
              name: "Province",
            },
          ],
          name: "Khanh Hoa Province",
          abbrv: null,
          location_id: "1184689",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "Vietnam",
          abbrv: null,
          location_id: "293921",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "cafe",
          name: "Café",
        },
      ],
      parent_display_name: "Nha Trang",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 89 803 40 39",
      website: "http://www.facebook.com/kincafenhatrang",
      email: "minhkhangwood@gmail.com",
      address_obj: {
        street1: "Hung Vuong",
        street2: "Dien Khanh",
        city: "Nha Trang",
        state: null,
        country: "Vietnam",
        postalcode: "650000",
      },
      address: "Hung Vuong Dien Khanh, Nha Trang 650000 Vietnam",
      hours: {
        week_ranges: [
          [
            {
              open_time: 360,
              close_time: 1320,
            },
          ],
          [
            {
              open_time: 360,
              close_time: 1320,
            },
          ],
          [
            {
              open_time: 360,
              close_time: 1320,
            },
          ],
          [
            {
              open_time: 360,
              close_time: 1320,
            },
          ],
          [
            {
              open_time: 360,
              close_time: 1320,
            },
          ],
          [
            {
              open_time: 360,
              close_time: 1320,
            },
          ],
          [
            {
              open_time: 360,
              close_time: 1320,
            },
          ],
        ],
        timezone: "Asia/Ho_Chi_Minh",
      },
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10642",
          name: "Cafe",
        },
      ],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "7385578",
      name: "Xoi Bap Viet Nam",
      latitude: "11.92117",
      longitude: "109.14324",
      num_reviews: "1",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Cam Ranh, Khanh Hoa Province",
      awards: [],
      doubleclick_zone: "as.vietnam",
      preferred_map_engine: "default",
      raw_ranking: "3.018955945968628",
      ranking_geo: "Cam Ranh",
      ranking_geo_id: "1025208",
      ranking_position: "11",
      ranking_denominator: "15",
      ranking_category: "restaurant",
      ranking: "#11 of 21 Restaurants in Cam Ranh",
      distance: null,
      distance_string: null,
      bearing: "south",
      rating: "5.0",
      is_closed: false,
      is_long_closed: false,
      price_level: "",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g1025208-d7385578-Reviews-Xoi_Bap_Viet_Nam-Cam_Ranh_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g1025208-d7385578-Xoi_Bap_Viet_Nam-Cam_Ranh_Khanh_Hoa_Province.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Cam Ranh",
          abbrv: null,
          location_id: "1025208",
        },
        {
          subcategory: [
            {
              key: "province",
              name: "Province",
            },
          ],
          name: "Khanh Hoa Province",
          abbrv: null,
          location_id: "1184689",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "Vietnam",
          abbrv: null,
          location_id: "293921",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [
        {
          key: "fast_food",
          name: "Fast food",
        },
      ],
      parent_display_name: "Cam Ranh",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 94 329 12 88",
      address_obj: {
        street1: "51/5B Phan Chu Trinh",
        street2: "Gan Nga Tu Phan Chu Trinh, Huynh Thuc Khanh",
        city: "Cam Ranh",
        state: null,
        country: "Vietnam",
        postalcode: "058",
      },
      address:
        "51/5B Phan Chu Trinh Gan Nga Tu Phan Chu Trinh, Huynh Thuc Khanh, Cam Ranh 058 Vietnam",
      is_candidate_for_contact_info_suppression: false,
      cuisine: [],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "13809901",
      name: "Quan Lau Bo Anh Dung",
      latitude: "12.278305",
      longitude: "109.13267",
      num_reviews: "0",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Nha Trang, Khanh Hoa Province",
      awards: [],
      doubleclick_zone: "as.vietnam.khanh_hoa.nha_trang",
      preferred_map_engine: "default",
      distance: "7.289200667817142",
      distance_string: "7.3 km",
      bearing: "south",
      is_closed: false,
      is_long_closed: false,
      price_level: "",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g293928-d13809901-Reviews-Quan_Lau_Bo_Anh_Dung-Nha_Trang_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g293928-d13809901-Quan_Lau_Bo_Anh_Dung-Nha_Trang_Khanh_Hoa_Province.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Nha Trang",
          abbrv: null,
          location_id: "293928",
        },
        {
          subcategory: [
            {
              key: "province",
              name: "Province",
            },
          ],
          name: "Khanh Hoa Province",
          abbrv: null,
          location_id: "1184689",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "Vietnam",
          abbrv: null,
          location_id: "293921",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [],
      parent_display_name: "Nha Trang",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 258 3512 387",
      address_obj: {
        street1: "64 Nguyen Thi Minh Khai",
        street2: null,
        city: "Nha Trang",
        state: null,
        country: "Vietnam",
        postalcode: "650000",
      },
      address: "64 Nguyen Thi Minh Khai, Nha Trang 650000 Vietnam",
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10675",
          name: "Vietnamese",
        },
      ],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "293928",
      ad_position: "inline1",
      ad_size: "8X8",
      doubleclick_zone: "as.vietnam.khanh_hoa.nha_trang",
      ancestors: [
        {
          subcategory: [
            {
              key: "province",
              name: "Province",
            },
          ],
          name: "Khanh Hoa Province",
          abbrv: null,
          location_id: "1184689",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "Vietnam",
          abbrv: null,
          location_id: "293921",
        },
      ],
      detail: "0",
      page_type: "restaurants",
      mob_ptype: "app_restaurants",
    },
    {
      location_id: "10797819",
      name: "Bien Rung Restaurant",
      latitude: "12.255538",
      longitude: "109.10267",
      num_reviews: "0",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Nha Trang, Khanh Hoa Province",
      awards: [],
      doubleclick_zone: "as.vietnam.khanh_hoa.nha_trang",
      preferred_map_engine: "default",
      distance: "9.97938557457899",
      distance_string: "10 km",
      bearing: "south",
      is_closed: false,
      is_long_closed: false,
      price_level: "",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g293928-d10797819-Reviews-Bien_Rung_Restaurant-Nha_Trang_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g293928-d10797819-Bien_Rung_Restaurant-Nha_Trang_Khanh_Hoa_Province.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Nha Trang",
          abbrv: null,
          location_id: "293928",
        },
        {
          subcategory: [
            {
              key: "province",
              name: "Province",
            },
          ],
          name: "Khanh Hoa Province",
          abbrv: null,
          location_id: "1184689",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "Vietnam",
          abbrv: null,
          location_id: "293921",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [],
      parent_display_name: "Nha Trang",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 58 6282 828",
      address_obj: {
        street1: "15 Chu Van An Street, Dien Khanh Town,",
        street2: null,
        city: "Nha Trang",
        state: null,
        country: "Vietnam",
        postalcode: null,
      },
      address: "15 Chu Van An Street, Dien Khanh Town,, Nha Trang Vietnam",
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10675",
          name: "Vietnamese",
        },
      ],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
    {
      location_id: "19625554",
      name: "Nha Hang - Quan An Gio",
      latitude: "11.91457",
      longitude: "109.13224",
      num_reviews: "0",
      timezone: "Asia/Ho_Chi_Minh",
      location_string: "Cam Ranh, Khanh Hoa Province",
      awards: [],
      doubleclick_zone: "as.vietnam",
      preferred_map_engine: "default",
      distance: null,
      distance_string: null,
      bearing: "south",
      is_closed: false,
      is_long_closed: false,
      price_level: "",
      description: "",
      web_url:
        "https://www.tripadvisor.com/Restaurant_Review-g1025208-d19625554-Reviews-Nha_Hang_Quan_An_Gio-Cam_Ranh_Khanh_Hoa_Province.html",
      write_review:
        "https://www.tripadvisor.com/UserReview-g1025208-d19625554-Nha_Hang_Quan_An_Gio-Cam_Ranh_Khanh_Hoa_Province.html",
      ancestors: [
        {
          subcategory: [
            {
              key: "city",
              name: "City",
            },
          ],
          name: "Cam Ranh",
          abbrv: null,
          location_id: "1025208",
        },
        {
          subcategory: [
            {
              key: "province",
              name: "Province",
            },
          ],
          name: "Khanh Hoa Province",
          abbrv: null,
          location_id: "1184689",
        },
        {
          subcategory: [
            {
              key: "country",
              name: "Country",
            },
          ],
          name: "Vietnam",
          abbrv: null,
          location_id: "293921",
        },
      ],
      category: {
        key: "restaurant",
        name: "Restaurant",
      },
      subcategory: [],
      parent_display_name: "Cam Ranh",
      is_jfy_enabled: false,
      nearest_metro_station: [],
      phone: "+84 93 571 70 70",
      address_obj: {
        street1: "Cam Nghia",
        street2: null,
        city: "Cam Ranh",
        state: null,
        country: "Vietnam",
        postalcode: "650000",
      },
      address: "Cam Nghia, Cam Ranh 650000 Vietnam",
      is_candidate_for_contact_info_suppression: false,
      cuisine: [
        {
          key: "10675",
          name: "Vietnamese",
        },
      ],
      dietary_restrictions: [],
      establishment_types: [
        {
          key: "10591",
          name: "Restaurants",
        },
      ],
    },
  ];

  return data;
};
