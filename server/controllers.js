const models = require('./models');

module.exports = {
  createNewUser: (req, res) => {
    let newUserData = req.body;

    models.dbCreateNewUser(newUserData)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('DUPLICATE DATA EXISTS')
        res.sendStatus(404);
      });
  },

  logUserIn: (req, res) => {
    let userData = JSON.parse(req.get('userData'));

    console.log(userData);


    models.dbLogUserIn(userData)
      .then((data) => {
        if (!data.length) {
          throw 'DATA DOES NOT EXIST';
        } else {
          return data;
        }
      })
      .then((data) => {
        res.send(data);
      }).catch((err) => {
        console.log('DATA DOES NOT EXIST')
        res.sendStatus(404);
      })
  },

  updateUserData: (req, res) => {
    let username = req.params.username;
    let data = req.body;

    models.dbUpdateUserData({ ...{ username }, ...data })
      .then((data) => {
        if (!data) {
          throw 'DATA DOES NOT EXIST';
        }
      })
      .then(() => {
        res.sendStatus(201);
      }).catch((err) => {
        console.log('DATA DOES NOT EXIST')
        res.sendStatus(404);
      });
  },

  getProductAlternatives: (req, res) => {
    let productParams = JSON.parse(req.get('productParams'));

    models.apiGetProductAlternatives(productParams)
      .then(({data}) => {
        res.send(data.results);
      })
      .catch((err) => {
        console.log('DATA DOES NOT EXIST')
        res.sendStatus(404);
      });
  },
}