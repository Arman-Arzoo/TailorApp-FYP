const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const validatePhoneNumber = require("validate-phone-number-node-js");
// isValidZipcode = require("is-valid-zipcode");
// const jwt = require("jsonwebtoken");
// const dotenv =require("dotenv");
// const validator = require("validator");
// const auth = require("../middleWare/auth");

// dotenv.config();

// @disc   Get all Users
// @Route  Post /users/singup
// @acess  Public

exports.UserSingup = async (req, res) => {
  try {
    // check for all field not empty
    let {
      firstName,
      lastName,
      email,
      password,
      confirmedPassword,
      phoneNumber,
      gender,
      address,
      country,
      state,
      city,
      zipCode,
    } = req.body;
  

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmedPassword ||
      !phoneNumber ||
      !gender ||
      !address ||
      !country ||
      !state ||
      !city ||
      !zipCode
    ) {
      return res.status(400).json({ msg: "Please Fill Out All The Field" });
    }
    // validation name

    // email validation
   const emailcheck = validator.validate(email);

   if(!emailcheck){
    return res
    .status(400)
    .json({ msg: "Please Enter Valid Email" });
      
   }

    // check for password validation
    if (password.length < 5) {
      return res
        .status(400)
        .json({ msg: "password should be 5 character or more" });
    }

    if (password != confirmedPassword) {
      return res.status(400).json({ msg: "password does not matched" });
    }

   
    // check for user exit  with the email and phone number
    const existingUser = await User.findOne({
      email: email,
    //   phoneNumber: phoneNumber,
    });

    if (existingUser) {
      return res.status(400).json({ msg: "already have and account" });
    }

    // password security
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // validate phone Number
   

    // zipCode = isValidZipcode("20000", "Pk");

    //store user

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      phoneNumber,
      gender,
      address,
      country,
      state,
      city,
      zipCode,

      
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  
  } catch (err) {
    res.status(500).json({error:err.message})
  }
};
