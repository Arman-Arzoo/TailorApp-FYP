const router = require('express').Router();

const adminController = require('../controllers/adminController');
const auth = require('../middelWare/auth');



// router for registraion 
router.post('/signup',adminController.AdminSingup);

// router for sign in
router.post('/signin',adminController.AdminLogin);


module.exports = router