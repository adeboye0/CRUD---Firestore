const express = require('express');
const router = express.Router();
const Controller = require('./route-config').Controller;

router.route('/get').get(Controller.Crud.get);
router.route('/edit/:id').put(Controller.Crud.edit);
router.route('/post').post(Controller.Crud.post);
router.route('/delete/:id').get(Controller.Crud.delete);


module.exports = router;