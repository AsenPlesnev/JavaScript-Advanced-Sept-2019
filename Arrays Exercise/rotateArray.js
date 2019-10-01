function solve(arr) {
    let amountOfRotation = arr.pop();

    for (let i = 0; i < amountOfRotation % arr.length; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    return arr.join(" ");
}

console.log(solve(
    [
        '1',
        '2',
        '3',
        '4',
        '2'
    ]
));