const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
    },
    });

    await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER, // Replace with your email
    subject: 'New Contact Form Message From Portfolio',
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br>${message}</p>`
    });
    res.status(200).json({ message: 'Message sent successfully!' });
    } catch (err) {
      console.error('SendMail Error:', err);
    res.status(500).json({ message: 'Failed to send message.', error: err.toString() });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {});