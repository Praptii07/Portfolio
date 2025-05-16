import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MY_EMAIL,      // your Gmail
                pass: process.env.MY_PASSWORD,   // Gmail App Password
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.MY_EMAIL}>`, // Shows as: Name via your email
            to: process.env.MY_EMAIL,                    // Your email to receive
            replyTo: email,                              // Sets user's email as reply-to
            subject: `New Contact Form Submission from ${name}`,
            text: `You received a new message:

Name: ${name}
Email: ${email}
Message:
${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
