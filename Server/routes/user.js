// const router = require('express');
const express = require('express')
const router = express.Router();
const {signup, login} = require('../controllers/user');
const {userMiddleware} = require('../middleware/user');
const { SlotBooking }  = require("../controllers/user");
 
router.post('/signup',signup);
router.post('/login', login, userMiddleware);
router.post('/book',SlotBooking); //userMiddleware

module.exports = router;
