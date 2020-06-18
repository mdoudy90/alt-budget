const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.post('/users', controllers.createNewUser);
router.get('/users', controllers.logUserIn);
router.put('/users/:username', controllers.updateUserData);
router.get('/alternatives', controllers.getProductAlternatives);

module.exports = router;