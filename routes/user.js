var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add_user');
});

router.post('/register/user',controller.addUser);

router.get('/users/list', controller.displayUsers);
router.get('/user/remove/:id', controller.deleteUser)
router.get('/user', controller.fetchSingleUser)
router.post('/user/update/:id', controller.updateuser)



module.exports = router;
