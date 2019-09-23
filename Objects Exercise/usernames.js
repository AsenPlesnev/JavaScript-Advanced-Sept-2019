function solve(arr) {
    let catalogue = [];
    let sort = arr.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b);
    });

    let names = new Set(sort);

    for (const name of names) {
        console.log(name);
    }
}

solve(
    [
        'Ashton',
        'Kutcher',
        'Ariel',
        'Lilly',
        'Keyden',
        'Aizen',
        'Billy',
        'Braston'
    ]

);