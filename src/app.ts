import { getEmailAddressesOfParticipants } from './getEmailAddressesOfParticipants';
import { getValidPermutation } from './getValidPermutation';
import { DisplayPermutation } from './models/displayPermutation';
import { ParticipantData } from './models/participantData';
import { saveValidPermutation } from './saveValidPermutation';
import { sendEmailToMaster } from './sendEmailToMaster';
import { sendEmailToParticipant } from './sendEmailToParticipant';

getValidPermutation().then(({ permutation, people }) => {
    const permutationForDisplay: DisplayPermutation[] = permutation.map(
        (toIndex: number, fromIndex: number) => ({
            from: people[fromIndex],
            to: people[toIndex],
        }),
    );
    console.log(permutationForDisplay);
    saveValidPermutation(permutation);
    sendEmailToMaster(permutationForDisplay);
    getEmailAddressesOfParticipants().then(
        (participantDataArray: ParticipantData[]) => {
            permutationForDisplay.forEach((permutationItem) => {
                const participantData = participantDataArray.find(
                    (participantData) =>
                        permutationItem.from === participantData.name,
                );
                // DO NOT RUN NODEMON (`npm run dev`) WITH THIS UNCOMMENTED!
                // TODO: add some sort of confirmation thing?
                if (participantData) {
                    sendEmailToParticipant(
                        participantData.name,
                        participantData.email,
                        permutationItem.to,
                    );
                } else {
                    console.log(
                        `Failed to send email to ${permutationItem.from}`,
                    );
                }
            });
        },
    );
});

// TODO: send emails to people to make anonymous for operator?
