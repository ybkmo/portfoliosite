const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Serve your static files
app.use(express.static('public'));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-email-password'
    }
});

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).send('Invalid email address');
    }

    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: email,
        subject: 'Thank you for subscribing!',
        text: 'Thank you for subscribing to my portfolio updates. I look forward to sharing my work with you!'
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Subscription successful');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while subscribing');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));