import * as fs from 'fs';

export const saveValidPermutation = (permutation: number[]): void => {
    let matchingDataToWrite = '';

    permutation.forEach((toIndex: number) => {
        const row = new Array(permutation.length).fill(0);
        row[toIndex] = 1;
        matchingDataToWrite = matchingDataToWrite
            .concat(row.toString())
            .concat('\n');
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fs.writeFile('../matching.csv', matchingDataToWrite, () => {});
};
