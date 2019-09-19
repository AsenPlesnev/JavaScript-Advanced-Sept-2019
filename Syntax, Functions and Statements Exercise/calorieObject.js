function solve(arr) {
    let obj = {};

    for (let i = 0; i <= arr.length - 1; i += 2) {
        let element = arr[i];
        let value = Number(arr[i + 1]);

        obj[element] = value;
    }

    return obj;
}

console.log(solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));