const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/altbudget', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  budget: {},
  preferences: {},
  wishlist: [],
},
{ timestamps: true });

module.exports = {
  User: mongoose.model('User', userSchema),
}
