const query = require('../db/models');
const axiosHelpers = require('./axiosHelpers');

module.exports = {
  dbCreateNewUser: (data) => query.createNewUser(data),
  dbLogUserIn: (data) => query.fetchUserData(data),
  dbUpdateUserData: (data) => query.updateUserData(data),
  apiGetProductAlternatives: (data) => axiosHelpers.getListings(data),
}