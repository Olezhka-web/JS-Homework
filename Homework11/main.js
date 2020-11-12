// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const button = document.getElementById('button');
// const text = document.getElementById('text');
// button.onclick = ev => {
//     text.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const button = document.getElementById('button');
// button.onclick = ev => {
//     button.style.display= 'none';
// }
//Або через target
// button.onclick = ev => {
//     ev.target.style.display= 'none';
// }
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const input = document.getElementById('input');
// const button = document.getElementById('button');
// button.onclick = ev => {
//     const value = input.value;
//     if(value < 18 && value > 0){
//         alert('Find a girl');
//     }
// }
//
// - Создайте меню, которое раскрывается/сворачивается при клике
// const menu = document.getElementById('menu');
// const link = document.getElementById('menu__link');
// const items = document.getElementById('items');
// let flag = false;
//
// link.onclick = ev => {
//     if(flag){
//         items.style.display = 'block';
//         flag = false;
//     } else {
//         items.style.display = 'none';
//         flag = true;
//     }
// }

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let arr = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
// let menu = document.getElementById('content');
// arr.forEach(item => {
//    let div = document.createElement('div');
//    let h1 = document.createElement('h1');
//    let p = document.createElement('p');
//     let h2 = document.createElement('h2');
//     let h3 = document.createElement('h3');
//     let button = document.createElement('button');
//     h2.innerText = item.title;
//     p.innerText = item.body;
//     let flag = false;
//     button.onclick = ev => {
//             if(flag){
//                 p.style.display = 'block';
//                 flag = false;
//             } else {
//                 p.style.display = 'none';
//                 flag = true;
//             }
//         }
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//     menu.appendChild(div);
// });
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const input3 = document.getElementById('input21');
// const input4 = document.getElementById('input22');
// const button = document.getElementById('button2');
// button.onclick = ev => {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }
//
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// const content = document.getElementById('content');
// function createTable(rows, cols, tag){
//   const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement('td');
//             td.innerHTML = i.toString() + j.toString();
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     tag.appendChild(table);
// };
// createTable(4, 5, content);
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const content = document.getElementById('content');
// const input1 = document.createElement('input');
// input1.type = 'number'; input1.id = 'inputRows';
// const input2 = document.createElement('input');
// input2.type = 'number'; input2.id = 'inputCols';
// const input3 = document.createElement('input');
// input3.type = 'text'; input3.id = 'inputText';
// const button = document.createElement('button');
// button.innerText = 'Click to send';
// function createTable(rows, cols, text, tag){
//         const table = document.createElement('table');
//         for (let i = 0; i < rows; i++) {
//             const tr = document.createElement('tr');
//             for (let j = 0; j < cols; j++) {
//                 const td = document.createElement('td');
//                 td.innerHTML = text;
//                 tr.appendChild(td);
//             }
//             table.appendChild(tr);
//         }
//         tag.appendChild(table);
// };
// content.appendChild(input1);
// content.appendChild(input2);
// content.appendChild(input3);
// content.appendChild(button);
// button.onclick = ev => { createTable(input1.value, input2.value, input3.value, content);}
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let arr = [
//     {id: 0, img_url: 'sun-image1.jpg'},
//     {id: 1, img_url: 'sun-image2.jpg'},
//     {id: 2, img_url: 'sun-image3.jpg'},
//     {id: 3, img_url: 'sun-image4.png'},
// ];
// const content = document.getElementById('content');
// const image = document.createElement('img');
// const btnLeft = document.createElement('button');
// const btnRight = document.createElement('button');
// btnLeft.innerText = 'Left';
// btnRight.innerText = 'Right';
// image.width = 300;
// let i = 0;
// image.src = arr[i].img_url;
// content.appendChild(image);
// content.appendChild(btnLeft);
// content.appendChild(btnRight);
// btnLeft.onclick = ev => {
//     if(i - 1 < 0){
//         i = arr.length - 1;
//     } else {
//         i = i - 1;
//     }
//     image.src = arr[i].img_url;
// }
// btnRight.onclick = ev => {
//     if(i + 1 > arr.length - 1){
//         i = 0;
//     } else {
//         i = i + 1;
//     }
//     image.src = arr[i].img_url;
// }
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let arr = ['nice', 'very', 'good'];
// let content = document.getElementById('content');
// let input = document.createElement('input'); input.type = 'text';
// let button = document.createElement('button');
// button.innerText = 'Check';
// button.onclick = ev => {
//     for (const element of arr) {
//         if(input.value === element){
//             alert('Do not swear!');
//         }
//     }
// };
// content.appendChild(input);
// content.appendChild(button);
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let arr = ['nice', 'very', 'good'];
// let content = document.getElementById('content');
// let input = document.createElement('input'); input.type = 'text';
// let button = document.createElement('button');
// button.innerText = 'Check';
// button.onclick = ev => {
//     for (const element of arr) {
//         if(input.value.includes(element)){
//             alert('Do not swear!');
//         }
//     }
// };
// content.appendChild(input);
// content.appendChild(button);
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let h2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let wrap = document.getElementById('wrap');
// let ul = document.createElement('ul');
// for (let i = 0; i < h2.length; i++) {
//     const ulElement = h2[i];
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let id = 'item' + i;
//     a.href = '#' + id;
//     h2[i].setAttribute('id', id);
//     a.innerHTML= h2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
// content.style.width = '30%';
// wrap.style.width = '70%';
// content.style.float = 'left';
// wrap.style.float = 'left';
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let content = document.getElementById('content');
// let div = document.createElement('div');
// div.appendChild(myFunc(usersWithAddress));
// let input1 = document.createElement('input'); input1.type ='checkbox';
// let label1 = document.createElement('label'); label1.innerText = 'Status: False';
// let input2 = document.createElement('input'); input2.type ='checkbox';
// let label2 = document.createElement('label'); label2.innerText = 'Age: 29+';
// let input3 = document.createElement('input'); input3.type ='checkbox';
// let label3 = document.createElement('label'); label3.innerText = 'City: Kyiv';
// let button = document.createElement('button'); button.innerText = 'Filter';
// content.appendChild(input1); content.appendChild(label1);
// content.appendChild(input2); content.appendChild(label2);
// content.appendChild(input3); content.appendChild(label3);
// content.appendChild(button);
// content.appendChild(div);
// button.onclick = ev => {
//     let arr = JSON.parse(JSON.stringify(usersWithAddress));
//     if(input1.checked) arr = arr.filter(value => !value.status);
//     if(input2.checked) arr = arr.filter(value => value.age >= 29);
//     if(input3.checked) arr = arr.filter(value => value.address.city === 'Kyiv');
//     div.innerHTML = '';
//     div.appendChild(myFunc(arr));
// }
//
// function myFunc(arr){
//     let main = document.createElement('div');
//     arr.forEach( item => {
//     let itemDiv = document.createElement('div');
//     itemDiv.innerHTML = JSON.stringify(item);
//     main.appendChild(itemDiv);
//     })
//     return main;
// }
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
