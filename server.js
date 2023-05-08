require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// Middleware server
const cors = require('cors');
app.use(cors());
const allowedOrigins = ['https://manalipatel.vercel.app/', 'https://manalipatel.vercel.app/contact'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  console.log(req.body)
  const { name, email, message } = req.body;

  // Create a transporter object to send the email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false
    }
  });

  // Set up the email content
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.SEND_TO_EMAIL,
    subject: "New message from your website",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong. Please email me at patelmanali216@gmail.com");
  }
});


// Serve the built React app in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
