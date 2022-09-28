 # Secret Santa
Finds a valid permutation, given a csv file containing disallowed matchings in order to run a secret santa without repetitions.

## Banned matchings file

The banned matchings file should be formatted in the same way as the .example file.
|Alice| Bob| Claire| David|
|---|---|---|---|
|1|1|0|0|
|0|1|0|0|
|0|0|1|0|
|0|0|0|1|

The top row corresponds to the names of those involved & the remaining cells are 1 or 0 according to whether each person can give a gift to the other.
In this example Alice should not buy a gift for Bob because row 1, column 2 contains a 1.
The program obviously won't work if the csv is not of the size $n \times (n+1)$ with n participants.

## Output

The output is self explanatory, logging to console an array of the form 
```json
[
    {
        "from": "Alice",
        "to": "Claire"
    }
]
```
