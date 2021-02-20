const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middelWare/auth');

// router for registraion 
router.post('/signup',userController.UserSingup);
// router for sign in
router.post('/signin',userController.UserLogin);
// router for delete user
router.delete('/delete-user',auth,userController.UserSingup);
// router for check user token valid
router.post('/token-valid',userController.tokenValid);
// get all user form database
router.get('/',auth,userController.GetAllUser);
// router for update user
router.put('/:id',userController.updateUser);

// router for measurement Submission
router.post('/udashboard/my-measurement/:id',userController.userMeasurement)


module.exports = router