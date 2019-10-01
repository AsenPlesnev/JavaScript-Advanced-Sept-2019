function solve(arr) {
    let value = 1;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] === "add" ? result.push(value) : result.pop();
        value++;
    }

    if (result.length === 0) {
        return "Empty";
    }

    return result.join("\n");
}

console.log(solve(
    [
        'add',
        'add',
        'remove',
        'add',
        'add'
    ]
));