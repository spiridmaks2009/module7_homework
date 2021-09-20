let worker = {
    name: "Ivan",
    age: 34,
    city: "Berlin"
};

for (let key in worker) {
    console.log(key + ": " + worker[key]);
}