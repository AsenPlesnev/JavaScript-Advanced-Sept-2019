function solve(arr) {
    let n = arr.pop();

    let result = arr.filter((number, index) => index % n === 0);

    return result.join('\n');
}

console.log(solve(
    [
        '5',
        '20',
        '31',
        '4',
        '20',
        '2'
    ]
));