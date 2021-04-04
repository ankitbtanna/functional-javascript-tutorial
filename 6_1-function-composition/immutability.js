const oldCities = ["Delhi", "Bombay", "Bangalore"];

const newCities = oldCities.map((city) => {
    if (city === "Bombay") return "Mumbai";
    if (city === "Bangalore") return "Bengaluru";
    return city;
})

oldCities; // ["Delhi", "Bombay", "Bangalore"]
newCities; // ["Delhi", "Mumbai", "Bengaluru"]