import {randomPermutation} from './randomPermutation'
import csv from 'csv-parser';
import * as fs from 'fs';

const bannedAssignments: any[] = [];
let people: string[];

fs.createReadStream('2022bannedMatchings.csv')
    .pipe(csv())
    .on('headers', (headers: string[]) => {
        people = headers.splice(0);
        console.log(people);
    })
    .on('data', (data: any) => {
        bannedAssignments.push(data);
    })
    .on('end', () => {
        console.log(bannedAssignments);
    })




