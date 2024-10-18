import {NextFunction, Request, Response} from 'express'
import Email from './email.model'
import {emailSchema} from './email.validation'
import { defaultSender, transporter } from '../../config'


export const getAllEmails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const emails = await Email.find()
        res.status(200).json(emails)
    } catch (error) {
        next(error)
    }
}


export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    // validate the request body
    const parsedBody = emailSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({ error: parsedBody.error.errors });
    }

      // create mail option
      const { sender, recipient, subject, message, source } = parsedBody.data;
      const from = sender || defaultSender;
  
      const emailOption = {
        from,
        to: recipient,
        subject,
        text: message,
      };



      // send the email
      const { rejected } = await transporter.sendMail(emailOption);
  
      if (rejected.length) {
        console.log("Email rejected", rejected);
        return res.status(500).json({ message: "Failed" });
      }
  
      // save the email
      const email = await Email.create({
        data: {
          sender: from,
          recipient,
          subject,
          message,
          source,
        },
      });
  
      res.status(201).json({
        success: true,
        message: "Email sent successfully",
        data: email,
      });
  
}


