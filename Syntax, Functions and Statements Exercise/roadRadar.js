function solve(arr) {

    const areaMap = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20,
    }

    const overLimit1 = 20;
    const overLimit2 = 40;

    let speed = arr[0];
    let area = arr[1];

    return speed > areaMap[area] ? (speed <= areaMap[area] + overLimit1 ? "speeding" : (speed <= areaMap[area] + overLimit2 ? "excessive speeding" : "reckless driving")) : "";
}

console.log(solve([200, 'motorway']));