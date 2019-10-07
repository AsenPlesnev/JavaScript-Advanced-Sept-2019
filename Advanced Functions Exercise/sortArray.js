function solve(arr, type) {
    let result = [];

    type === "asc" ? result = arr.sort((a, b) => a - b) : result = arr.sort((a, b) => b - a);

    return result
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));

