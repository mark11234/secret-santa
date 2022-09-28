import { getBannedAssignmentsAndPeople } from './getBannedAssignmentsAndPeople';
import { randomPermutation } from './randomPermutation';

getBannedAssignmentsAndPeople().then(({ bannedAssignments, people }) => {
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
    console.log(
        permutation.map((toIndex: number, fromIndex: number) => ({
            from: people[fromIndex],
            to: people[toIndex],
        })),
    );
});
