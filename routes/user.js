const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user');

router.post('/', user_controller.addUser);
router.get('/all', user_controller.findAll);
router.get('/:id', user_controller.findById);
router.put('/:id', user_controller.update);
router.delete('/:id', user_controller.delete);
router.post('/csvtodatabase/:fileName', user_controller.csvToDatabase);
router.post('/jsontocsv/:fileName', user_controller.jsonToCsv);

module.exports = router;
