import { getValidPermutation } from './getValidPermutation';
import { DisplayPermutation } from './models/displayPermutation';
import { saveValidPermutation } from './saveValidPermutation';
import { sendEmailToMaster } from './sendEmailToMaster';

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
});

// TODO: send emails to people to make anonymous for operator?
