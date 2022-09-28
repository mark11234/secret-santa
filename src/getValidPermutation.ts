import { getBannedAssignmentsAndPeople } from './getBannedAssignmentsAndPeople';
import { randomPermutation } from './randomPermutation';

export const getValidPermutation = async (): Promise<{
    permutation: number[];
    people: string[];
}> => {
    const { bannedAssignments, people } = await getBannedAssignmentsAndPeople();
    let permutation: number[];
    // eslint-disable-next-line no-constant-condition
    while (true) {
        permutation = randomPermutation([...Array(people.length).keys()]);
        let bannedMatching = false;
        permutation.forEach((toIndex: number, fromIndex: number) => {
            bannedMatching =
                bannedMatching || bannedAssignments[fromIndex][toIndex];
        });
        if (!bannedMatching) break;
    }
    return { permutation: permutation, people: people };
};
