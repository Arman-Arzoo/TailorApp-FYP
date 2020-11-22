const router = require('express').Router();
const userController = require('../controllers/userController')

// router for registraion 
router.post('/signup',userController.UserSingup);


module.exports = router