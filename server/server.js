const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const nodemailer = require("nodemailer");
const path = require('path');
const { authMiddleware } = require('./utils/auth.js');
require("dotenv").config();
const PORT = process.env.PORT || 3001;

const app = express();

const cors = require("cors");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, '../public/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../public/build')));
}


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/build/index.html'));
});

let transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });
   
   app.post("/send", function (req, res) {
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Message from: ${req.body.mailerState.email}`,
      text: `${req.body.mailerState.message}`,
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        res.json({
          status: "fail",
        });
      } else {
        console.log("== Message Sent ==");
        res.json({
          status: "success",
        });
      }
    });
   });
   


   app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
   });


