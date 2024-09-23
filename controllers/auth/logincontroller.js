const nodemailer = require('nodemailer');

const loginUser = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.EMAIL_PASSWORD // Your email password or app password
    }
  });

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const sendEmails = async () => {
    for (let i = 0; i < 10000; i++) {
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Test Email',
        text: `This is test email number ${i + 1}`
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`Email ${i + 1} sent to ${email}`);
      } catch (error) {
        console.error(`Error sending email ${i + 1}:`, error);
      }

      // Delay for 1 second between emails
      await delay(1000); // Adjust the delay as needed
    }
  };

  await sendEmails();
  res.status(200).send('Emails sent successfully');
};

module.exports = { loginUser };
