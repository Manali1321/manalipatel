require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();


app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter object to send the email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
