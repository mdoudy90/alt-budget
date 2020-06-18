const models = require('./models');

module.exports = {
  createNewUser: (req, res) => {
    // send req.body to models
    res.sendStatus(201);
  },

  logUserIn: (req, res) => {
    res.send('data')
  },

  updateUserData: (req, res) => {
    res.sendStatus(201);
  },

  getProductAlternatives: (req, res) => {
    res.send('products')
  },
}