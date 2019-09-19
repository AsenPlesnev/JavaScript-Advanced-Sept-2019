function solve(x) {
    let digits = (x.toString().split(""))
        .map(Number);

    let sum = digits
        .reduce((acc, curr) => acc + curr);

    return `${digits.every((val, i, arr) => val === arr[0])} \n${sum}`;
}

console.log(solve(2222222));