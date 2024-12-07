import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
//import * as nodemailer from "nodemailer";
//import ejs from 'ejs';
import * as  dotenv from 'dotenv'

dotenv.config();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const sendEMail = onRequest(async (request, response) => {
  // const { sender, email, subject, message } = request.body;
  // const newDate = new Date();
  // const datehour = newDate.getHours();
  // const datemin = newDate.getMinutes();
  // const dateDay = newDate.getDate();
  // const dateMonth = newDate.toLocaleString('default', { month: 'long' });
  // const dateYear = newDate.getFullYear();
  // const date = `${datehour}:${datemin} ${dateMonth} ${dateDay}, ${dateYear}`;


  logger.info("sendMail", {structureData: true});
  console.log("user_email: ", process.env.GMAIL_USER_EMAIL);

  // const transporter = nodemailer.createTransport({
  //   service:'gmail',
  //   host:'smtp.gmail.com',
  //   port: 587,
  //   secure:false,
  //   auth: {
  //     user:process.env.GMAIL_USER_EMAIL,
  //     pass:process.env.GMAIL_PASSWORD
  //   },
  // });

  // const mailOptions = {
  //   from: {
  //     name: "M Grills",
  //     address: "michael.grills@gmail.com"
  //   },
  //   to: ["michael.grills@gmail.com"],
  //   subject: "test Email",
  //   text:"test message",
  //   //text:message,
  //   //html: `<p>${message}</p>`,
  //   html:`<p>test message</p>`
  // }
  
  // const result = await transporter.sendMail(mailOptions);

  // response.json(result.messageId);


})
