const axios = require('axios');
const { API_KEY } = require('../config');

const domain = `https://openapi.etsy.com`;
const uriListings = `/v2/listings/active`;

module.exports = {
  getListings: (data) => {
    const {minPrice, maxPrice, keyword} = data;

    // const minPrice = 90;
    // const maxPrice = 100;
    // const keyword = 'watch';

    const URL = `${domain}${uriListings}?api_key=${API_KEY}&includes=Images&min_price=${minPrice}&max_price=${maxPrice}&keywords="${keyword}"&sort_on=score`;

    return axios.get(URL);
  }
}

