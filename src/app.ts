import { getValidPermutation } from './getValidPermutation';
import { saveValidPermutation } from './saveValidPermutation';

getValidPermutation().then(({ permutation, people }) => {
    console.log(
        permutation.map((toIndex: number, fromIndex: number) => ({
            from: people[fromIndex],
            to: people[toIndex],
        })),
    );
    saveValidPermutation(permutation);
});

// TODO: send emails to people to make anonymous for operator?
