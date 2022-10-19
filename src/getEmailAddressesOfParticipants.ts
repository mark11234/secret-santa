import csv from 'csvtojson';
import { ParticipantData } from './models/participantData';

const EMAIL_ADDRESS_FILE = '../emailAddresses.csv';

export const getEmailAddressesOfParticipants = async (): Promise<
    ParticipantData[]
> => {
    const data = (await csv().fromFile(
        EMAIL_ADDRESS_FILE,
    )) as ParticipantData[];
    return data;
};
