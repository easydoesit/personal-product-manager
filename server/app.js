const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/send-email', async (req, res) => {
  const { sender, email, subject, message } = req.body;
  const newDate = new Date();
  const datehour = newDate.getHours();
  const datemin = newDate.getMinutes();
  const dateDay = newDate.getDate();
  const dateMonth = newDate.toLocaleString('default', { month: 'long' });
  const dateYear = newDate.getFullYear();
  const date = `${datehour}:${datemin} ${dateMonth} ${dateDay}, ${dateYear}`;

  console.log(date);

  ejs.renderFile(path.join(__dirname, 'email/email.ejs'), {
    siteTitle: 'Project Management',
    sender,
    email,
    subject,
    message,
    date
  }).then(async (emailTemplate) => {
    brevoPath = 'https://api.brevo.com/v3/smtp/email'

    const BREVO_API_KEY = process.env.BREVO_API;

    console.log(emailTemplate);

    try {

      const response = await fetch(brevoPath, {
        method: "POST",
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          'sender': {
            'name': 'Contact from Product Management',
            'email': 'contact@michaelgrills.ca',
          },
          'repyTo': { 'email': email, "name": sender },
          'to': [{
            'email': 'michael.grills@gmail.com',
            'name': 'Michael Grills',
          }],
          'textContent': `From: ${sender}, Subject: ${subject},  Email: ${email}, Message:${message}, Date: ${date}.`,
          'subject': subject,
          'htmlContent': emailTemplate,
          'headers': {
            "charset": "iso-8859-1",
          }
        })
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to send Email');
      }

      res.status(200).json(await response.json());

    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }

  })


});

app.listen(3000, () => {
  console.log('Server is running on http:localhost:3000');
});
