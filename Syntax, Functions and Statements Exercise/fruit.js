function solve(fruit, weight, money) {
    let weightInKg = weight/1000;

    let price = weightInKg * money;

    return `I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(solve('orange', 2500, 1.80));