// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let car = {
// 	color: 'red',
// 	box: 'mechanics',
// 	mark: 'Mercedes-Benz'
// };
// let human = {
// 	name: 'Oleh',
// 	age: 18,
// 	skills: ['html', 'css', 'js']
// };
// let house = {
// 	state: 'new',
// 	rooms: 4,
// 	discount: false
// };
// let myFriend = {
// 	weight: 80,
// 	status: 'married',
// 	car: false
// };
// let table = {
// 	material: 'wood',
// 	description: ['New', 'Comfortable'],
// 	yearOfCreation: 2020
// };

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let car = {
// 	yearOfCreation: 2018,
// 	marks: ['Mercedes-Benz', 'Toyota'],
// 	moreInformation: {
// 		box: 'mechanics',
// 		color: 'red'
// 	}
// };
// let human = {
// 	name: 'Oleh',
// 	skills: ['html', 'css', 'js'],
// 	wife: {
// 		name: 'Alina',
// 		age: 18
// 	}
// };
// let house = {
// 	state: 'new',
// 	rooms: ['Bathroom', 'Toilet', 'Bedroom'],
// 	description: {
// 		discount: true
// 	}
// };
// let myFriend = {
// 	weight: 80,
// 	characteristic: ['Happy','Clever','Cheerful'],
// 	property: {
// 		car: 'Mercedes-Benz',
// 		house: true,
// 		wife: false
// 	}
// };
// let table = {
// 	material: 'wood',
// 	description: ['New', 'Comfortable'],
// 	additionally: {
// 		price: 700,
// 		currency: 'UAH'
// 	}
// };

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const carKey in car) {
// 	console.log(carKey);
// }
// for (const humanKey in human) {
// 	console.log(humanKey);
// }
// for (const houseKey in house) {
// 	console.log(houseKey);
// }
// for (const myFriendKey in myFriend) {
// 	console.log(myFriendKey);
// }
// for (const tableKey in table) {
// 	console.log(tableKey);
// }

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let keys = Object.keys(car);
// for(let i = 0; i < keys.length; i++){
// 	console.log(keys[i]);
// }
// keys = Object.keys(human);
// for(let i = 0; i < keys.length; i++){
// 	console.log(keys[i]);
// }
// keys = Object.keys(house);
// for(let i = 0; i < keys.length; i++){
// 	console.log(keys[i]);
// }
// keys = Object.keys(myFriend);
// for(let i = 0; i < keys.length; i++){
// 	console.log(keys[i]);
// }
// keys = Object.keys(table);
// for(let i = 0; i < keys.length; i++){
// 	console.log(keys[i]);
// }

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
// 	{model: 'Mercedes-Benz', yearOfCreate: 2018, power: 60, color: 'red'},
// 	{model: 'Toyota', yearOfCreate: 2017, power: 50, color: 'black'},
// 	{model: 'Audi', yearOfCreate: 2012, power: 87, color: 'yellow'},
// 	{model: 'BMW', yearOfCreate: 2015, power: 100, color: 'blue'},
// 	{model: 'Lexus', yearOfCreate: 2020, power: 120, color: 'gold'},
// 	{model: 'Lincoln', yearOfCreate: 2018, power: 80, color: 'pink'},
// 	{model: 'Iveco', yearOfCreate: 2017, power: 70, color: 'green'},
// 	{model: 'Lotus', yearOfCreate: 2011, power: 66, color: 'white'},
// 	{model: 'Mazda', yearOfCreate: 2013, power: 58, color: 'brown'},
// 	{model: 'Isuzu', yearOfCreate: 2014, power: 98, color: 'purple'}
// ];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
// 	{name: 'Lviv', country: 'Ukraine', population: 724000, region: 'Lviv region'},
// 	{name: 'Ternopil', country: 'Ukraine', population: 220000, region: 'Ternopil region'},
// 	{name: 'New York', country: 'USA', population: 8175000, region: 'New York region'},
// 	{name: 'Odessa', country: 'Ukraine', population: 1017000, region: 'Odessa region'},
// ];

// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars = [
// 	{model: 'Mercedes-Benz', yearOfCreate: 2018, power: 60, color: 'red', driver: {name: 'Oleh', age: 19, sex: 'man', experience: 1}},
// 	{model: 'Toyota', yearOfCreate: 2017, power: 50, color: 'black', driver: {name: 'Vasya', age: 20, sex: 'man', experience: 2}},
// 	{model: 'Audi', yearOfCreate: 2012, power: 87, color: 'yellow', driver: {name: 'Anya', age: 23, sex: 'woman', experience: 3}},
// 	{model: 'BMW', yearOfCreate: 2015, power: 100, color: 'blue', driver: {name: 'Olya', age: 22, sex: 'man', experience: 4}}
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while(i < cars.length){
// 	console.log(cars[i]);
// 	i++
// }
// while(i < cities.length){
// 	console.log(cities[i]);
// 	i++
// }
// while(i < cars.length){
// 	console.log(cars[i]);
// 	i++
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for(let i = 0; i < cars.length; i++){
// 	console.log(cars[i]);
// }
// for(let i = 0; i < cities.length; i++){
// 	console.log(cities[i]);
// }
// for(let i = 0; i < cars.length; i++){
// 	console.log(cars[i]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const car of cars) {
// 	console.log(car);
// }
// for (const citi of cities) {
// 	console.log(citi);
// }
// for (const carWithDriver of cars) {
// 	console.log(carWithDriver);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let car = {
// 	color: 'red',
// 	box: 'mechanics',
// 	mark: 'Mercedes-Benz'
// };
// let human = {
// 	name: 'Oleh',
// 	age: 18,
// 	skills: ['html', 'css', 'js']
// };
// let house = {
// 	state: 'new',
// 	rooms: 4,
// 	discount: false
// };
// let myFriend = {
// 	weight: 80,
// 	status: 'married',
// 	car: false
// };
// let table = {
// 	material: 'wood',
// 	description: ['New', 'Comfortable'],
// 	yearOfCreation: 2020
// };
//
// let a = JSON.stringify(car);
// console.log(a);
// let b = JSON.stringify(human);
// console.log(b);
// let c = JSON.stringify(house);
// console.log(c);
// let d = JSON.stringify(myFriend);
// console.log(d);
// let e = JSON.stringify(table);
// console.log(e);

// - взять json из задания 11 и превратить их обратно в объекты.
// console.log(JSON.parse(a));
// console.log(JSON.parse(b));
// console.log(JSON.parse(c));
// console.log(JSON.parse(d));
// console.log(JSON.parse(e));

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let cars = [
// 	{model: 'Mercedes-Benz', yearOfCreate: 2018, power: 60, color: 'red'},
// 	{model: 'Toyota', yearOfCreate: 2017, power: 50, color: 'black'},
// 	{model: 'Audi', yearOfCreate: 2012, power: 87, color: 'yellow'},
// 	{model: 'BMW', yearOfCreate: 2015, power: 100, color: 'blue'},
// 	{model: 'Lexus', yearOfCreate: 2020, power: 120, color: 'gold'},
// 	{model: 'Lincoln', yearOfCreate: 2018, power: 80, color: 'pink'},
// 	{model: 'Iveco', yearOfCreate: 2017, power: 70, color: 'green'},
// 	{model: 'Lotus', yearOfCreate: 2011, power: 66, color: 'white'},
// 	{model: 'Mazda', yearOfCreate: 2013, power: 58, color: 'brown'},
// 	{model: 'Isuzu', yearOfCreate: 2014, power: 98, color: 'purple'}
// ];
// for(let i = 0; i < cars.length; i++){
// 	console.log(JSON.stringify(cars[i]));
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let cities = [
// 	{name: 'Lviv', country: 'Ukraine', population: 724000, region: 'Lviv region'},
// 	{name: 'Ternopil', country: 'Ukraine', population: 220000, region: 'Ternopil region'},
// 	{name: 'New York', country: 'USA', population: 8175000, region: 'New York region'},
// 	{name: 'Odessa', country: 'Ukraine', population: 1017000, region: 'Odessa region'},
// ];
// for(let i = 0; i < cities.length; i++){
// 	console.log(JSON.stringify(cities[i]));
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let array = [];
// let cars = [
// 	{model: 'Mercedes-Benz', yearOfCreate: 2018, power: 60, color: 'red', driver: {name: 'Oleh', age: 19, sex: 'man', experience: 1}},
// 	{model: 'Toyota', yearOfCreate: 2017, power: 50, color: 'black', driver: {name: 'Vasya', age: 20, sex: 'man', experience: 2}},
// 	{model: 'Audi', yearOfCreate: 2012, power: 87, color: 'yellow', driver: {name: 'Anya', age: 23, sex: 'woman', experience: 3}},
// 	{model: 'BMW', yearOfCreate: 2015, power: 100, color: 'blue', driver: {name: 'Olya', age: 22, sex: 'man', experience: 4}}
// ];
// for(let i = 0; i < cars.length; i++){
// 	array[i] = JSON.stringify(cars[i]);
// 	console.log(array[i]);
// }
// console.log(array);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
// 	{name: 'Oleh', skills: ['css', 'js', 'Angular']},
// 	{name: 'Karina', skills: ['html', 'python', 'java']},
// 	{name: 'Kyrylo', skills: ['html', 'js', 'React']},
// 	{name: 'Misha', skills: ['c', 'js', 'css']}
// ];
// for (const user of users) {
// 	console.log(user.name);
// 	for (const skill of user.skills) {
// 		console.log(skill);
// 	}
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let array = [];
// let users = [
// 	{name: 'Oleh', skills: ['css', 'js', 'Angular']},
// 	{name: 'Karina', skills: ['html', 'python', 'java']},
// 	{name: 'Kyrylo', skills: ['html', 'js', 'React']},
// 	{name: 'Misha', skills: ['c', 'js', 'css']}
// ];
// for (const user of users) {
// 	console.log(user.name);
// 	for (const skill of user.skills) {
// 		array.push(skill);
// 	}
// }
// console.log(array);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (const user of users) {
// 	console.log(user.name);
// 	for (const skill of user.skills) {
// 		console.log(skill);
// 	}
// }
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
// 	name: 'vasya',
// 	age: 31,
// 	status: false,
// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
// 	name: 'petya',
// 	age: 30,
// 	status: true,
// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
// 	name: 'kolya',
// 	age: 29,
// 	status: true,
// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
// 	name: 'olya',
// 	age: 28,
// 	status: false,
// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
// 	name: 'max',
// 	age: 30,
// 	status: true,
// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
// 	name: 'anya',
// 	age: 31,
// 	status: false,
// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
// 	name: 'oleg',
// 	age: 28,
// 	status: false,
// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
// 	name: 'andrey',
// 	age: 29,
// 	status: true,
// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
// 	name: 'masha',
// 	age: 30,
// 	status: true,
// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
// 	name: 'olya',
// 	age: 31,
// 	status: false,
// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
// 	name: 'max',
// 	age: 31,
// 	status: true,
// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let array = [];
// for (const user of users) {
// 	array.push(user.address);
// }
// console.log(array);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	let div = document.createElement('div');
// 	let address = '';
// 	for (const addressKey in user.address) {
// 		address = address + ' ' + user.address[addressKey];
// 	}
// 	div.innerText = `${user.name} ${user.age} ${address}`;
// 	document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	let div = document.createElement('div');
// 	let h3 = document.createElement('h3');
// 	let p1 = document.createElement('p');
// 	let p2 = document.createElement('p');
// 	let address = '';
// 	for (const addressKey in user.address) {
// 		address = address + ' ' + user.address[addressKey];
// 	}
// 	h3.innerText = user.name;
// 	p1.innerText = user.age;
// 	p2.innerText = address;
//
// 	div.appendChild(h3);
// 	div.appendChild(p1);
// 	div.appendChild(p2);
// 	document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	let div = document.createElement('div');
// 	let name = document.createElement('h3');
// 	let age = document.createElement('p');
// 	let status = document.createElement('p');
// 	let address = document.createElement('div');
// 	for (const addressKey in user.address) {
// 		let temp = document.createElement('div');
// 		temp.innerHTML = addressKey;
// 		address.appendChild(temp);
// 	}
// 	name.innerText = user.name;
// 	age.innerText = user.age;
// 	status.innerText = user.status;
//
// 	div.appendChild(name);
// 	div.appendChild(age);
// 	div.appendChild(status);
// 	div.appendChild(address);
// 	document.body.appendChild(div);
// }

//
//             			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             			}];
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// for(const user of usersWithId){
// 	for(const city of citiesWithId){
// 		if(user.id === city.user_id){
// 			user.address = city;
// 		}
// 	}
// }
// console.log(usersWithId);

// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
//
//
//
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let element = document.getElementById('content');
// let innerText = element.innerHTML;
// console.log(innerText);

// - змінити цей текст використовуючи селектори id, class,  tag
// let element = document.getElementsByClassName('rules');
// for (const elementElement of element) {
// 	elementElement.innerText = 'hello'
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let element = document.getElementsByTagName('h2');
// for (const elementElement of element) {
// 	elementElement.style.width = '300px';
// 	elementElement.style.height = '300px';
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let td = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// tr.appendChild(td);
// tr.appendChild(td2);
// tr.appendChild(td3);
//
// table.appendChild(tr);
//
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement('table');
// for(let i = 0; i < 10; i++){
// 	let tr = document.createElement('tr');
// 	for(let i = 0; i < 3; i++){
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
//
//
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table');
// for(let i = 0; i < 10; i++){
// 	let tr = document.createElement('tr');
// 	for(let i = 0; i < 5; i++){
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
//
//
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = prompt();
// let m = prompt();
// let table = document.createElement('table');
// for(let i = 0; i < n; i++){
// 	let tr = document.createElement('tr');
// 	for(let i = 0; i < m; i++){
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
//
//
// document.body.appendChild(table);
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
// let element = document.getElementsByTagName('*');
// for (const tag of element) {
// 	if(tag.getAttribute('class')){
// 		console.log(tag);
// 	}
// }
// Або
// let element = document.querySelectorAll('[class]');
// console.log(element);
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі елементі, які мають class
// let element = document.getElementsByTagName('p');
// for (const tag of element) {
// 	tag.innerText = 'hello oktenwab';
// }
//  - знайти всі div та змінити ім колір на червоний
// let element = document.getElementsByTagName('div');
// for (const tag of element) {
// 	tag.style.backgroundColor = 'red';
// }
//
//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
