function solve(arr) {
    let num = Number(arr.shift());

    let operations = {
        "chop": (x) => { return (x / 2) },
        "dice": (x) => { return (Math.sqrt(x)) },
        "spice": (x) => { return (++x) },
        "bake": (x) => { return (x *= 3) },
        "fillet": (x) => { return (x *= 0.8).toFixed(1) },
    };

    for (let i = 0; i < arr.length; i++) {

        num = operations[arr[i]](num);

        console.log(num);
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);