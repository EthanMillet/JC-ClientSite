const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

require("dotenv").config();

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
   
   const port = 3001;
   app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
   });