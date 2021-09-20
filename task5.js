
class Electrodevice {
    constructor(name, power) {
        this.power = power;
        this.isTurnedOn = false;
        this.name = name;
    }

    turnOn() {
        this.isTurnedOn = true;
        console.log(this.name + " turned on");
    }

    turnOff() {
        this.isTurnedOn = false;
        console.log(this.name + " turned off");
    }
}

class Lamp extends Electrodevice {

}

class Computer extends Electrodevice {
    mineCoins() {
        if (this.isTurnedOn) {
            console.log(this.name + " is mining bitcoins...");
        } else {
            console.log(this.name + " must be turned on before mining")
        }
    }
}

let computer = new Computer("Computer", 500);
let lamp = new Lamp("Lamp", 200);

computer.turnOn();
computer.mineCoins();
computer.turnOff();
lamp.turnOn();
lamp.turnOff();
