
const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middelWare/auth');

// router for registraion 
router.post('/signup',userController.UserSingup);
// router for sign in
router.post('/signin',userController.UserLogin);
// router for delete user
router.delete('/usersdelete-user',auth,userController.UserSingup);
// router for check user token valid
router.post('/token-valid',userController.tokenValid);
// get all user form database
router.get('/',auth,userController.GetAllUser);
// router for update user
router.put('/:id',userController.updateUser);
// session user verify
router.get('/session',auth,userController.SessionUsers);

// router for measurement Submission
router.post('/udashboard/my-measurement/',userController.userMeasurement)
// router for get measurement Submission
router.get('/udashboard/my-measurement/:id', userController.getMeasurement)


// router get request security 






module.exports = router