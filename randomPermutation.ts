export const randomPermutation = <T>(items: Array<T>): T[] => {
    const permutedItems: T[] = [];
    const unusedItems = items.slice(0);

    for (let i = 0; i < items.length; i++) {
        const randomIndex = Math.floor(Math.random() * unusedItems.length);
        permutedItems.push(unusedItems[randomIndex]);
        unusedItems.splice(randomIndex, 1);
    }
    return permutedItems;
};
