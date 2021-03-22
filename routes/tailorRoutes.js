const router = require('express').Router();

const tailorController = require('../controllers/tailorController');
const auth = require('../middelWare/auth');
const mongoose=require("mongoose")
// require("../models/tailorModel/ViewMeasurement")
// const ViewMeasurement=mongoose.model("Measurement")



// router for registraion 
router.post('/signup',tailorController.TailorSingup);

// router for sign in
router.post('/signin',tailorController.TailorLogin);

// router for check tailor token valid
router.post('/token-valid',tailorController.tokenValid);

router.get("/ViewMeasurement",tailorController.ViewMeasurement)



module.exports = router