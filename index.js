// Get a random integer under a given number.
export default function getRandomIntUnder(max, includeMax) {
    const int = includeMax === true ? 0 : 1;

    return Math.floor(Math.random() * (max - int));
}
