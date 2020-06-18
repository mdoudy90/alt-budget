const { User } = require('./connection');

module.exports = {
  createNewUser: (data) => {
    const newUser = new User(data);
    return newUser.save();
  },
  fetchUserData: (data) => {
    return User.find(data);
  },
  updateUserData: (data) => {
    const filter = { username: data.username };
    return User.findOneAndUpdate(filter, data).exec();
  }
}