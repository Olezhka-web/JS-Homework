//
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
//
// let dog = {
// 	breed: 'Badger dog',
// 	age: 5,
// 	toy: 'ball',
// 	clever: true,
// 	country: 'Ukraine'
// };
// let human = {
// 	name: 'Kostya',
// 	age: 25,
// 	girl: true,
// 	car: 'BMW',
// 	status: 'married'
// };
// let car = {
// 	mark: 'Mercedes-Benz',
// 	age: 1,
// 	box: 'Mechanics',
// 	price: 66000,
// 	currency: '$'
// };
// let apartment = {
// 	state: 'new',
// 	place: 'center',
// 	rooms: 5,
// 	price: 100000,
// 	currency: '$'
// };
// let book = {
// 	name: 'Eloquent JavaScript',
// 	year: 2018,
// 	pages: 436,
// 	interesting: true,
// 	price: 650,
// 	currency: 'UAH'
// };
// console.log(dog);
// console.log(human);
// console.log(car);
// console.log(apartment);
// console.log(book);

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// let arrayDogs = ['Бульдог', 'Боксер', 'Пудель', 'Мопс', 'Доберман'];
// console.log(arrayDogs);

// - 3 5 людей
// let arrayPeople = ['Oleg', 'Nazar', 'Dima', 'Victor', 'Olya'];
// console.log(arrayPeople);

// - з 5 автомобілів
// let arrayCars = ['БМВ', 'Опель', 'Мерседес', 'Тойота', 'Тесла'];
// console.log(arrayCars);
//
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// let house = {
// 	state: 'new',
// 	moreInformation: {
// 		square: 380,
// 	    age: 5},
//  	rooms: ['Bathroom', 'Bedroom', 'Hall', 'Kitchen', 'Living room', 'Toilet', 'Children room'],
//  	price: 100000,
//  	currency: '$'
// };
// console.log(house);

// - водій
// let driver = {
// 	name: 'Oleh',
// 	age: 26,
// 	experience: 8,
// 	cars: ['Mercedes-Benz', 'Toyota', 'BMW'],
// 	moreInformation: {
// 		status: 'married',
// 		wife: 'Oksana'}
// }
// console.log(driver);

// - іграшку
// let toy = {
// 	state: 'new',
// 	age: 1,
// 	moreInformation: {
// 		create: 'Canada',
// 		discount: true},
// 	description: ['New', 'Beautiful', 'Not Expensive'],
// 	country: 'Ukraine'
// };
// console.log(toy);

// - стіл
// let table = {
//  	state: 'new',
//  	material: 'wood',
// 	moreInformation: {
//  		create: 'Ukraine',
// 		discount: false,
// 		drawers: 2
// 	},
// 	description: ['New', 'Comfortable', 'Not Expensive'],
// 	price: 700,
//     currency: 'UAH'
// };
// console.log(table);

// - сумка
// let bag = {
// 	state: 'new',
// 	material: 'leather',
// 	moreInformation: {
// 		create: 'Ukraine',
// 		discount: false,
// 	},
// 	description: ['New', 'Comfortable', 'Not Expensive'],
// 	price: 300,
// 	currency: 'UAH'
// };
// console.log(bag);
//
//
//
// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log(users[7].status);
// Або
// console.log(users[7]['status']);

// - статус Максима
// console.log(users[4].status);
// console.log(users[10].status);

// - ім'я передостаннього об'єкту
// console.log(users[users.length - 2].status);

// - ім'я третього об'єкта
// console.log(users[2].name);

// - вік Олега
// console.log(users[6].age);


// - вік Олі
// console.log(users[3].age);
// console.log(users[9].age);

// - вік + ім'я 5го об'єкта
// console.log(users[4].age + users[4].name);
//Або
// console.log(users[4].age, users[4].name);

// - вік + сатус Анни
// console.log(users[5].age, users[5].status);

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let element = document.getElementById('content');

// - отримує текст з блоку з id "rules"
// let element = document.getElementById('rules');

// - замініть текст параграфа з id 'content' на будь-який інший
// let element = document.getElementById('content');
// element.innerText = 'Hello world';

// - замініть текст параграфа з id 'rules' на будь-який інший
// let element = document.getElementById('rules');
// element.innerText = 'Hello world';

// - змініть кожному елементу колір фону на червоний
// element.style.backgroundColor= 'red';

// - змініть кожному елементу колір тексту на синій
// element.style.backgroundColor= 'blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let element = document.getElementById('rules');
// let classes = element.classList;
// console.log(element.classList); // незнаю чи правильно зрозумів завдання, тому ще циклом перебрав
// for(let i = 0; i < classes.length; i++){
// 	console.log(classes[i]);
// }

// - отримати всі елементи з класом fc_rules
// console.log(document.getElementsByClassName('fc_rules')); // незнаю чи правильно зрозумів завдання, тому ще циклом перебрав
// let element = document.getElementsByClassName('fc_rules');
// for(let i = 0; i < element.length; i++){
// 	console.log(element[i]);
// }

// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let element = document.getElementsByClassName('fc_rules');
// for(let i = 0; i < element.length; i++){
// 	element[i].style.color = 'red';
// }
//
