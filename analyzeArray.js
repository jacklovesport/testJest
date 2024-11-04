function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = arr.reduce((sum, num) => sum + num, 0) / length;

    return {
        average,
        min,
        max,
        length,
    };

}

module.exports = analyzeArray;