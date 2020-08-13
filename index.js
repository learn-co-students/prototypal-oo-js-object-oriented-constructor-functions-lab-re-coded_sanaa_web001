function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

let samson = new Scooter(2015, "red", "swoosh");
samson.year;
samson.color;
samson.model;

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}
let allison = new Driver("Allison", "16 years", "2 years");
allison.name;
allison.age;
allison.experience;

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}
let poshHotel = new PickupLocation("123 Broadway", "New York City");
poshHotel.address;
poshHotel.city;
