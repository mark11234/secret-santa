import csv from 'csvtojson';

const BANNED_MATCHINGS_FILE = 'bannedMatchings.csv'

export const getBannedAssignmentsAndPeople = async (): Promise<{ bannedAssignments: boolean[][], people: string[] }> => {
    const bannedAssignments: boolean[][] = [];
    let people: string[] = [];
    (await csv().fromFile(BANNED_MATCHINGS_FILE)).map(
        (item) => {
            people = Object.keys(item);
            bannedAssignments.push(Object.values(item).map(
                (value) => (
                    typeof value === 'string' ? !!parseInt(value) : false
                )
            ));
        }
    )
    return { bannedAssignments: bannedAssignments, people: people };
    // i.e. bannedAssignments[i][j] === true // means people[i] cannot give a gift to people[j]
    //   bannedAssignments[0][8];  // true
    //   bannedAssignments[8][0];  // false
    //   people[0];                // Mike
    //   people[8];                // SarahP
    //   Because Mike has bought for SarahP previously, but SarahP has never bought for Mike
};
