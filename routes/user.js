const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user');

router.post('/user', user_controller.addUser);
router.get('/users', user_controller.findAll);
router.get('/user/:id', user_controller.findById);
router.put('/user/:id', user_controller.update);
router.delete('/user/:id', user_controller.delete);

module.exports = router;
