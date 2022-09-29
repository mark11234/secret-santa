import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { DisplayPermutation } from './models/displayPermutation';
import { EmailMessage } from './models/emailMessage';
dotenv.config({ path: '../.env' });

export const sendEmailToMaster = (
    permutationForDisplay: DisplayPermutation[],
): void => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? 'api_key_missing');

    let textToSend = '';
    permutationForDisplay.forEach((item) => {
        textToSend = textToSend.concat(`From ${item.from} to ${item.to} \n`);
    });

    const message: EmailMessage = {
        to: process.env.MASTER_EMAIL_ADDRESS,
        from: process.env.MASTER_EMAIL_ADDRESS,
        subject: 'Secret Santa Allocations',
        text: textToSend,
    };

    sgMail.send(message).catch((error) => {
        console.log(error);
        console.log(error.response.body);
    });
};
