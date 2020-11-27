const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const validatePhoneNumber = require("validate-phone-number-node-js");
// isValidZipcode = require("is-valid-zipcode");
const jwt = require("jsonwebtoken");
const { findByIdAndDelete } = require("../models/userModel");
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

    if (!emailcheck) {
      return res.status(400).json({ msg: "Please Enter Valid Email" });
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
      zipCode
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @disc   Get all Users
// @Route  Post /users/login
// @acess  Public

exports.UserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ msg: "Please Fill All The Feild" });
  }

  const user = await User.findOne({ email: email });

  console.log(user)

  if (!user) {
    res.status(400).json({ msg: "No Account With This Email" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400).json({ msg: "Invalid Crediential" });
  }
  // when user sign in we create a token for user
  let JWT_SECRET = "youronwerisarman";

  const token = jwt.sign({ id: user._id }, JWT_SECRET);

  // response when successufly login
  res.json({
    token,
    user
  });
};




// @disc   Get all Users
// @Route  Post /users/delete-user
// @acess  Public

exports.deleteUser = async (req , res) => {

  try {
    const deleteUser = await findByIdAndDelete(req.user)
    res.json(deleteUser);
    
  } catch (err) {
    
    res.status(500).json({error:err.message})
  }


}

// @disc   Get all Users
// @Route  Post /users/token-valid
// @acess  Public

exports.tokenValid =  async (req,res)=>{

  try{
      const token = req.header("x-auth-token");
      

      if(!token){
          return res.json(false)
      }
      let JWT_SECRET = "youronwerisarman"  
      const verified = jwt.verify(token,JWT_SECRET);

      if(!verified){
          return res.json(false)
      }
  
      const user = await User.findById(verified.id)
      if(!user){
          return res.json(false)
      }
      else{
          return res.json(true)
      }


  }catch(err){

  }

};

// User Token validation End


// @disc   Get all Users
// @Route  Get /users/
// @acess  Public

exports.GetAllUser = async (req,res) =>{
  try {
    const user = await User.findById(req.user);
    res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._id
    })
    
  } catch (err) {
    
  }

}

