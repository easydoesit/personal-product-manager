
import * as logger from "firebase-functions/logger";
import { onRequest} from "firebase-functions/v2/https";
import * as nodemailer from "nodemailer";
import * as ejs from 'ejs';
import * as path from 'path';
import * as  dotenv from 'dotenv'

dotenv.config();

export const sendEMail = onRequest(async (req:any, res:any) => {

  try {
    const { name, email, message, date } = req.body;

    if (!name || !email || !message) {
      res.status(400).send("Missing required fields: name, email, or message");
      return;
    }

    const emailTemplate = await ejs.renderFile(path.join(__dirname, 'email/email.ejs'), {
      siteTitle: process.env.SITE_TITLE,
      sender:name,
      email,
      subject:"Message from Project Management Site",
      message,
      date: new Date(date).toLocaleString(),
    });


    const transporter = nodemailer.createTransport({
      service:'gmail',
      host:'smtp.gmail.com',
      port: 587,
      secure:false,
      auth: {
        user:process.env.GMAIL_USER_EMAIL,
        pass:process.env.GMAIL_PASSWORD
      },
    });

    const mailOptions = {
      from: {
        name: name,
        address: email
      },
      to: [process.env.GMAIL_USER_EMAIL as string],
      subject: `Message from ${name}`,
      text:message,
      html:emailTemplate
    };
    
    const result = await transporter.sendMail(mailOptions);

    logger.info("Email sent", { messageId: result.messageId});
    
    res.status(200).send({ success: true, messageId: result.messageId });
    
  } catch(error) {
      logger.error("Error sending email", error);
      res.status(500).send({ success: false, error: error });
    } 

});
