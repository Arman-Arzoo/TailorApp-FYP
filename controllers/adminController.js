const Tailor = require("../models/adminModel/adminModel");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");



exports.AdminSingup = async (req, res) => {
    try {
      // check for all field not empty
      let {
        firstName,
        lastName,
        email,
        password,
        confirmedPassword,
        
      } = req.body;
  
      if (
        !firstName ||
        !lastName ||
        !email |
        !password ||
        !confirmedPassword
        )
         {
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
      const existingAdmin = await Admin.findOne({
        email: email,
        //   phoneNumber: phoneNumber,
      });
  
      if (existingAdmin) {
        return res.status(400).json({ msg: "already have and account" });
      }
  
      // password security
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      // validate phone Number
  
      // zipCode = isValidZipcode("20000", "Pk");
  
      //store user
  
      const newAdmin = new Admin({
        firstName,
        lastName,
        email,
        password: passwordHash,
        
      });
  
      //email to user
      // const transporter = nodemaier.createTransport(sendGridTransport({
      //   auth:{
      //     api_key:"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"
      //   }
      // }))
      
      const savedAdmin = await newAdmin.save();
      // .then(user=>{
      //   transporter.sendMail({
      //     to:user.email,
      //     from:"breakfast389@gmail.com",
      //     subject:"conformation message ",
      //     html:"<h1>welcome to email</h1>"
  
      //   })
      // });
      res.json(savedAdmin);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  



// @disc   Get all Users
// @Route  Post /tailors/login
// @acess  Public

exports.AdminLogin = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.status(400).json({ msg: "Please Fill All The Feild" });
    }
  
    const admin = await Admin.findOne({ email: email });
  
    if (!admin) {
      res.status(400).json({ msg: "No Account With This Email" });
    }
  
    const isMatch = await bcrypt.compare(password, admin.password);
  
    if (!isMatch) {
      res.status(400).json({ msg: "Invalid Crediential" });
    }
    // when user sign in we create a token for user
    let JWT_SECRET = "youronwerisarman";
  
    const token = jwt.sign({ id: admin._id }, JWT_SECRET);
  
    // response when successufly login
    res.json({
      token,
      admin,
    });
  };
