// - створити функцію яка виводить масив
// let arr = [1, 2, 3, 4, 5];
// function array (a){
//     console.log(a);
// };
// array(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let arr = [];
// function array (a){
//     for(let i = 0; i < 10; i++){
//         a.push(Math.floor(Math.random()*10+1));
//     }
//     console.log(a);
// };
// array(arr);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function numbers (a, b, c){
//     if(a < b && a < c){
//         console.log(a);
//         return a;
//     } else if (b < a && b < c){
//         console.log(b);
//         return b;
//     } else if (c < a && c < b){
//         console.log(c);
//         return c;
//     }
// }
// let result = numbers(7, 5, 8);
// console.log(result);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function numbers (a, b, c){
//     if(a >= b && a >= c){
//         console.log(a);
//         return a;
//     } else if (b >= a && b >= c){
//         console.log(b);
//         return b;
//     } else if (c >= a && c >= b){
//         console.log(c);
//         return c;
//     }
// }
// let result = numbers(7, 5, 8);
// console.log(result);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function numbers (){
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const argument of arguments) {
//         if (argument > max) max = argument;
//         if (argument < min) min = argument;
//     }
//     console.log(max);
//     return min;
// }
// let result = numbers(7, 5, 8);
// console.log(result);

// - створити функцію яка виводить масив
// let array = [1, 2, 3, 4, 5];
// let arr = (a) => {
//     console.log(a);
// };
// arr(array);

// - створити функцію яка повертає найбільше число з масиву
// let array = [1, 2, 3, 4, 5];
// let arr = (a) => {
//     let max = array[0];
//     for (const arrElement of array) {
//         if(max < arrElement) max = arrElement;
//     }
//     return max;
// };
// let printMax = arr(array);
// console.log(printMax);

// - створити функцію яка повертає найменьше число з масиву
// let array = [1, 2, 3, 4, 5];
// let arr = (a) => {
//     let min = array[0];
//     for (const arrElement of array) {
//         if(min > arrElement) min = arrElement;
//     }
//     return min;
// };
// let printMin = arr(array);
// console.log(printMin);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function summa (array){
//     let sum = 0;
//     for (const item of array) {
//         sum+=item;
//     }
//     return sum;
// }
// let printArray = summa([1, 2, 3, 4, 5]);
// console.log(printArray);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function summa (array){
//     let sum = 0;
//     for (const item of array) {
//         sum+=item;
//     }
//     return sum/array.length;
// }
// let printArray = summa([1, 2, 3, 4, 5]);
// console.log(printArray);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function objects (array){
//     let count = 0;
//     for (const item of array) {
//         count++;
//     }
//     return count;
// }
// let printArray = objects([{news: ['Super', 'Nice']},
//                                 {numbers: 4},
//                                 {cars: true}]);
// console.log(printArray);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function objects (array){
//     let count = 0;
//     for (const item of array) {
//         for (const itemElement in item) {
//             count++;
//         }
//     }
//     return count;
// }
// let printArray = objects([{news: 'Super', weather: 'Nice'},
//     {numbers: 4},
//     {cars: true, color: 'Black'}]);
// console.log(printArray);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function myFunc(array1, array2){
//     let result =[];
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i]+array2[i]);
//     }
//     return result;
// }
// let printArray = myFunc([1,2, 3, 4], [2, 3, 4, 5]);
// console.log(printArray);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function myFunction(arr, i){
//     let array = arr;
//     if(i < array.length){
//         let a = array[i];
//         array[i] = array[i+1];
//         array[i+1] = a;
//     }
//     return array;
// };
// let change = myFunction([1, 2, 3, 4], 2);
// console.log(change);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function myFunction(array){
//     let zero = [];
//     let number = [];
//     for (const arrElement of array) {
//         if(arrElement === 0){
//             zero.push(0);
//         } else {
//             number.push(arrElement);
//         }
//     }
//     return number.concat(zero);
// }
// let result = myFunction([0,1,2,3,4]);
// console.log(result);

// Або

// function myFunction(array){
//     for(let i = array.length; i >= 0; i--){
//         if(array[i] === 0){
//             array.splice(i, 1);
//             array.push(0);
//         }
//     }
//     return array;
// }
// let result = myFunction([0,1,2,3,4]);
// console.log(result);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function add(text){
//     let tag = document.createElement('div');
//     tag.innerText = text;
//     document.body.appendChild(tag);
// }
// let result = add('Hello owu');

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function add(text, typeTag){
//     let tag = document.createElement(typeTag);
//     tag.innerText = text;
//     document.body.appendChild(tag);
// }
// let result = add('Hello owu', 'div');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars = ['Mercedes', 'LADA', 'Porsche', 'BMW'];
// function myFunc(carArray, idTag){
//     let block = document.getElementById(idTag);
//     let ul = document.createElement('ul');
//     for (let i = 0; i < carArray.length; i++) {
//         const carArrayElement = carArray[i];
//         let li = document.createElement('li');
//         li.innerHTML = `${i} ${carArrayElement}`;
//         ul.appendChild(li);
//     }
//     block.appendChild(ul);
// }
// let result = myFunc(cars, 'list');
// console.log(result);
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// Зробив тут завдання одним кодом, щоб не дублювати і переписувати, так як вони схожі між собою
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
// function myFunc(carArray, idTag){
//     let block = document.getElementById(idTag);
//     for (let i = 0; i < carArray.length; i++) {
//         const carArrayElement = carArray[i];
//         let div = document.createElement('div');
//         let model = document.createElement('h1');
//         let year = document.createElement('h2');
//         let power = document.createElement('h3');
//         let color = document.createElement('p');
//         model.innerHTML = `Model: ${carArrayElement.model}`;
//         year.innerHTML = `Year: ${carArrayElement.yearOfCreate}`;
//         power.innerHTML = `Power: ${carArrayElement.power}`;
//         color.innerHTML = `Color: ${carArrayElement.color}`;
//         div.appendChild(model);
//         div.appendChild(year);
//         div.appendChild(power);
//         div.appendChild(color);
//         block.appendChild(div);
//     }
// }
// let result = myFunc(cars, 'list');
// console.log(result);

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// function myFunction (array1, array2){
//     let users = JSON.parse(JSON.stringify(array1));
//     let cities = JSON.parse(JSON.stringify(array2));
//
// for(const user of users){
// 	for(const city of cities){
// 		if(user.id === city.user_id){
// 			user.address = city;
//
// 		}
// 	}
// }
// return users;
// }
// let result = myFunction(usersWithId, citiesWithId);
// console.log(result);
// console.log(usersWithId);
// console.log(citiesWithId);
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
// <div id="wrap">
//     <div class="rules rule1">
//         <h2>Первое правило Бойцовского клуба.</h2>
//         <p>Никому не рассказывать о Бойцовском клубе.</p>
//     </div>
// function myFunction(rules) {
//     let wrap = document.createElement('div');
//     wrap.id = 'wrap';
//     for (let i = 0; i < rules.length; i++) {
//         const ruleElement = rules[i];
//         let div = document.createElement('div');
//         let h2 = document.createElement('h2');
//         let p = document.createElement('p');
//         div.className = `rules rule${i + 1}`;
//         h2.innerText = ruleElement.title;
//         p.innerText = ruleElement.body;
//         div.appendChild(h2);
//         div.appendChild(p);
//         wrap.appendChild(div);
//     }
//     document.body.appendChild(wrap);
// }
// let result = myFunction(rules);

//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
// let N = +prompt();
// function myFunction(N) {
//     if(N <= 0 || Number.isInteger(N) === false){
//         return false;}
//         while(N != 1){
//             if(N % 2 != 0){
//                 return 'No';
//             }
//             N = N / 2;
//         }
//         return 'Yes';
// };
// let result = myFunction(N);
// console.log(result);

//Або
// let N = +prompt();
// function myFunction(N) {
//     while(N > 1 && N %2 == 0){
//         N/=2;
//     }
//     if(N == 1){
//         return 'Yes';
//     } else{
//         return 'No';
//     }
// };
// let result = myFunction(N);
// console.log(result);

//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
// let cars = {name: 'Mercedes', age: 1, color: {
//     superColor: 'Black', superColor2: 'White'
//     }};
// function myFunction (cars){
//     let newCars = {};
//     for (const carsKey in cars) {
//         if(typeof cars[carsKey] === "object"){
//             newCars[carsKey] = myFunction(cars[carsKey]);
//         } else{
//             newCars[carsKey]=cars[carsKey];
//         }
//     }
//     return newCars;
// }
// let result = myFunction(cars);
// result.color.superColor = 'red';
// console.log(cars);
// console.log(result);

//


// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// let array = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
// let newArray = [];
// for (const arrayElement of array) {
//     if(Array.isArray(arrayElement)){
//         for (const arrayElementElement of arrayElement) {
//             if(Array.isArray(arrayElementElement)) {
//                 for (const arrayElementElementElement of arrayElementElement) {
//                     newArray.push(arrayElementElementElement);
//                 }
//             } else{
//                 newArray.push(arrayElementElement);
//             }
//         }
//     } else{
//         newArray.push(arrayElement);
//     }
//
// }
// console.log(newArray);

///////////////////////////////////////////////////////////////////
//Або кращий спосіб
// function aaa(arr){
//     const res = []
//     for (let item of arr) {
//         if (typeof item === 'object'){
//             for (let call of aaa(item)) {
//                 res.push(call)
//             }
//         }else {
//             res.push(item)
//         }
//     }
//     return res;
// }
// ===========додаткове========
