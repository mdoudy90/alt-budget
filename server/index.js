const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();
const port = 5050;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));


  // TEST DATA FOR INDEX.JSX
  // componentDidMount() {

  //   // let newUserData = {
  //   //   email: 'michael.doudy@gmail.com',
  //     // username: 'mdoudy',
  //     // password: 'password',
  //   //   firstName: 'Michael',
  //   //   lastName: 'Doudy'
  //   // }
  //   // axios.post('/users', newUserData);

  //   // let userData = JSON.stringify({ username: 'mdoudy', password: 'passwrd' });
  //   // axios.get('/users', { headers: { userData } } ).then(({data}) => {
  //   //   console.log(data);
  //   // });

  //   // let newUserData = {
  //   //   firstName: 'MICHAEL',
  //   // }
  //   // axios.put('/users/mdoudy', newUserData);

  //   // let productParams = JSON.stringify({ minPrice: 90, maxPrice: 100, keyword: 'watch' });
  //   // axios.get('/alternatives', { headers: { productParams }} ).then(({data}) => {
  //   //   console.log(data);
  //   // });
  // }