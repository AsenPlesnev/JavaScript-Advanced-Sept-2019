function solve(arr) {
    let uniqueArr = [];

    let nestedArr = arr
        .map(JSON.parse);

    for (let array of nestedArr) {
        let sum = array.reduce((a, b) => a + b, 0);

        let containsSum = uniqueArr.some((x) =>
            x.reduce((a, b) => a + b, 0) === sum);

        if(!containsSum) {
            uniqueArr.push(array.sort((a, b) => b - a));  
        }
    }

    let output = uniqueArr
    .sort((a, b) => a.length - b.length)
    .map((arr) => `[${arr.join(', ')}]`)
    .join('\n');

    console.log(output);
}

solve(
    [
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]
);