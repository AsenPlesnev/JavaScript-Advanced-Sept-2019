function solve(arr) {
    arr = arr.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b);
    });

    return arr.join("\n")
}

console.log(solve(['alpha', 
'beta', 
'gamma']
));