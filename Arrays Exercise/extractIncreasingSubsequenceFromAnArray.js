function solve(arr) {
    let result = [];
    let prev = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= prev) {
            prev = arr[i];
            result.push(prev);
        }
    }

    return result.join("\n");
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));