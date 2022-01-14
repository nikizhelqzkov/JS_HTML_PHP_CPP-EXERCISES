class Bus {
  constructor(weight, name, fuelType, capacity) {
    this.weight = weight;
    this.name = name;
    this.fuelType = fuelType;
    this.capacity = capacity;
    this.busySeets = 0;
  }
  hasFreeSeets() {
    try {
      if (this.capacity - this.busySeets <= 0) {
        throw new Error("The capacity <= 0");
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  //weight, name, fuelType, capacity
}
const bus = new Bus(5000, "Mercedes", "Diesel", 50);
try {
  const hasFree = bus.hasFreeSeets();
  ``;
} catch (error) {
  console.log(error);
}
// console.log(bus.hasFreeSeets());
class Train {
  constructor(weight, name, parts, capacity) {
    this.weight = weight;
    this.name = name;
    this.parts = parts;
    this.capacity = capacity;
    this.busySeets = 0;
  }
  hasFreeSeets() {
    try {
      if (this.capacity - this.busySeets <= 0) {
        throw new Error("The capacity <= 0");
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  //weight, name, fuelType, capacity
}
