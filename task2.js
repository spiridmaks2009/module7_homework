let worker = {
    name: "Ivan",
    age: 34,
    city: "Berlin"
};

let str = "name";

function checkProperty(obj, str) {
    console.log(obj.hasOwnProperty(str));
}

checkProperty(worker, str);
