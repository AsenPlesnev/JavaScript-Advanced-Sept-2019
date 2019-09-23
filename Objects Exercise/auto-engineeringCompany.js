function solve(arr) {
    let register = {};

    for (const line of arr) {
        let [brand, model, cars] = line.split(" | ");
        cars = Number(cars);

        if(!register.hasOwnProperty(brand)) {
            register[brand] = {};
        }

        let models = register[brand];

        if(!models.hasOwnProperty(model)) {
            models[model] = cars;
        }
        else {
            models[model] += cars;
        }
    }

    for (let brand in register) {
        console.log(brand);

        for (let model in register[brand]) {
            console.log(`###${model} -> ${register[brand][model]}`);
        }
    }
}

solve(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
);