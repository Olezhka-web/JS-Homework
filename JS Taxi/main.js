let cars = [
  {
    brand: 'Mercedes-Benz',
    power: 50,
    owner: {
        name: 'Vasya',
        age: 20,
        experience: 2
    },
    price: 50000,
    yearOfCreate: 2019
},
  {
    brand: 'Mazda',
    power: 57,
    owner: {
        name: 'Oleg',
        age: 21,
        experience: 3
    },
    price: 70000,
    yearOfCreate: 2017
},
  {
    brand: 'Audi',
    power: 60,
    owner: {
        name: 'Kirill',
        age: 27,
        experience: 5
    },
    price: 40000,
    yearOfCreate: 2018
},
  {
    brand: 'Lada',
    power: 30,
    owner: {
        name: 'Gena',
        age: 26,
        experience: 3
    },
    price: 1000,
    yearOfCreate: 2014
},
  {
    brand: 'Ferrari',
    power: 200,
    owner: {
        name: 'Petro',
        age: 30,
        experience: 10
    },
    price: 500000,
    yearOfCreate: 2018
},
  {
    brand: 'Lamborghini',
    power: 300,
    owner: {
        name: 'Andriy',
        age: 32,
        experience: 8
    },
    price: 600000,
    yearOfCreate: 2017
},
 {
    brand: 'BMW',
    power: 80,
    owner: {
        name: 'Dima',
        age: 26,
        experience: 4
    },
    price: 40000,
    yearOfCreate: 2016
} ];
for (let i = 0; i < cars.length; i+=2) {
    const car = cars[i];
   let procent1 = car.power/100;
   let procent10 = procent1 * 10;
   car.power+= procent10;
   let procent2 = car.price/100;
   let procent5 = procent2 * 5;
   car.price+= procent5;
    console.log(car);
    console.log('__________________________________________');
}
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    if (car.owner.experience < 5 && car.owner.age > 25) {
        car.owner.goCourse = 'Go to the advanced training courses';
        car.owner.experience+=1;
    }
    console.log(car);
}
let sum = 0;
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    sum += car.price;
}
console.log('All summa: ' + sum);