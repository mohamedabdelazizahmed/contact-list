
const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();




// /users => GET
router.get('/users', userController.getUsers);

// /add-user => POST
router.post('/add-user', userController.postAddUser);
// /getRecentList =>POST
router.post('/getRecentList', userController.postRecentUser);


module.exports = router;
