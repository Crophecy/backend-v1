const express = require("express");
const userRoute= express.Router();
const userSchema = require('../model/userSchema');
const nodemailer = require('nodemailer');



userRoute.post('/contact', async (req, res) => {
  try {
    const { name, email, contact ,query } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'apicheck11@gmail.com',
      pass: 'xjex rlsk vjvj ybne'
    }
    });

    // Define the email options
    const mailOptions = {
      from: 'apicheck11@gmail.com',
      to: 'manyrishabh@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n Contact_no : ${contact} Message: ${query}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
     
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

userRoute.post('/register', async (req, res) => {
    console.log("clicked");
    try {
      const newUser = new userSchema(req.body);
      newUser.save();
  

      res.status(201).json({
        success: true,
        newUser,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
  });

  userRoute.get("/users",(req,res)=>{
    userSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


userRoute.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userSchema.findOne({ email, password });

        if (!user) {
            return res.status(404).send('User Not Found');
        }

        res.status(200).json({
            success: true,
            user: {
                userId: user._id, // Fix: use user._id instead of newUser._id
                username: user.username, // Fix: use user.username instead of newUser.username
                // Add other fields as needed
            }
        });
        
        console.log(user);
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }
});
module.exports = userRoute ;