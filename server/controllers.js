const models = require('./models');

module.exports = {
  createNewUser: (req, res) => {
    // send req.body to models
    res.sendStatus(201);
  },

  logUserIn: (req, res) => {
    // req.get('loginData')
    res.send('data')
  },

  updateUserData: (req, res) => {
    // req.params.username -- might need body-parser url encoded
    res.sendStatus(201);
  },

  getProductAlternatives: (req, res) => {
    // req.get('preferences')
    res.send('products')
  },
}