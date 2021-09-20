function Electrodevice(name, power) {
    this.power = power;
    this.isTurnedOn = false;
    this.name = name;
}

Electrodevice.prototype.turnOn = function (){
    this.isTurnedOn = true;
    console.log(this.name + " turned on");
}

Electrodevice.prototype.turnOff = function (){
    this.isTurnedOn = false;
    console.log(this.name + " turned off");
}

function Lamp(name, power) {
    this.power = power;
    this.isTurnedOn = false;
    this.name = name;
}
Lamp.prototype = new Electrodevice();

function Computer(name, power) {
    this.power = power;
    this.isTurnedOn = false;
    this.name = name;
}
Computer.prototype = new Electrodevice();
Computer.prototype.mineCoins = function (){
    if (this.isTurnedOn) {
        console.log(this.name + " is mining bitcoins...");
    } else {
        console.log(this.name + " must be turned on before mining")
    }
}

let computer = new Computer("Computer", 500);
let lamp = new Lamp("Lamp", 200);

computer.turnOn();
computer.mineCoins();
computer.turnOff();
lamp.turnOn();
lamp.turnOff();
