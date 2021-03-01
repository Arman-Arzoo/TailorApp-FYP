const router = require('express').Router();

const tailorController = require('../controllers/tailorController');
const auth = require('../middelWare/auth');



// router for registraion 
router.post('/signup',tailorController.TailorSingup);

// router for sign in
router.post('/signin',tailorController.TailorLogin);

// router for check tailor token valid
router.post('/token-valid',tailorController.tokenValid);


module.exports = router