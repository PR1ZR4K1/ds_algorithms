// worst case time complexity O(sqrt(n))

export default function two_crystal_balls(breaks: boolean[]): number {

    // This is the interval to jump by and search through
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    // walk through the array in intervals of sqrt(n)
    // once you find where it would break then you know that you can walk through
    // the array linearly starting from the previous sqrt(n) spot
    for (; i < breaks.length; i += jmpAmount) {

        if (breaks[i]) {
            break;
        }
    }

    // set i to its previous value before we broke the ball
    i -= jmpAmount;

    // walk through the array and make sure to not exceed the bounds of the array length
    // or the jmp amount
    for (let j = 0; j <= jmpAmount && i < breaks.length; j++, i++) {

        // return the index of the found item
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}