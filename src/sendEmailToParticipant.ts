import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { EmailMessage } from './models/emailMessage';
dotenv.config({ path: '../.env' });

export const sendEmailToParticipant = (
    giftGiverName: string,
    giftGiverEmailAddress: string,
    giftRecipient: string,
): void => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? 'api_key_missing');

    const message: EmailMessage = {
        to: giftGiverEmailAddress,
        from: process.env.MASTER_EMAIL_ADDRESS,
        subject: 'Secret Santa Allocation',
        text: `Dear ${giftGiverName},\n You are buying a gift for ${giftRecipient}. \n Best Wishes, Santa`,
    };

    sgMail.send(message).catch((error) => {
        console.log(error);
        console.log(error.response.body);
    });
};
