// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
// function Tags(titleOfTag, action, attrs){
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let attributesOfA = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'}
// ]
// let attributesOfDiv = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}
// ]
// let attributesOfH1 = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения'},
//     {titleOfAttr: 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра'}
// ]
// let attributesOfSpan = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
//     {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем'}
// ]
// let attributesOfInput = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения'},
//     {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением'}
// ]
// let attributesOfForm = [
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
//     {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы'},
//     {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы'}
// ]
// let attributesOfOption = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным'}
// ]
// let attributesOfSelect = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'},
//     {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента'}
// ]
// let a = new Tags('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок`, attributesOfA);
// let div = new Tags('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого`, attributesOfDiv);
// let h1 = new Tags('h1', `Тег <h1> представляет собой наиболее важный заголовок первого уровня`, attributesOfH1);
// let span = new Tags('span', `Тег <span> предназначен для определения строчных элементов документа`, attributesOfSpan);
// let input = new Tags('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем`, attributesOfInput);
// let form = new Tags('form', `Тег <form> устанавливает форму на веб-странице`, attributesOfForm);
// let option = new Tags('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`, attributesOfOption);
// let select = new Tags('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее`, attributesOfSelect);
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

// class Tags {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//         let attributesOfA = [
//             {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//             {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
//             {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'}
//         ]
//         let attributesOfDiv = [
//             {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//             {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
//             {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}
//         ]
//         let attributesOfH1 = [
//             {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//             {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения'},
//             {titleOfAttr: 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра'}
//         ]
//         let attributesOfSpan = [
//             {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//             {
//                 titleOfAttr: 'class',
//                 actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
//             },
//             {
//                 titleOfAttr: 'contenteditable',
//                 actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем'
//             }
//         ]
//         let attributesOfInput = [
//             {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//             {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения'},
//             {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением'}
//         ]
//         let attributesOfForm = [
//             {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
//             {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы'},
//             {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы'}
//         ]
//         let attributesOfOption = [
//             {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента'},
//             {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'},
//             {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным'}
//         ]
//         let attributesOfSelect = [
//             {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//             {
//                 titleOfAttr: 'autofocus',
//                 actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'
//             },
//             {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента'}
//         ]
//         let a = new Tags('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок`, attributesOfA);
//         let div = new Tags('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого`, attributesOfDiv);
//         let h1 = new Tags('h1', `Тег <h1> представляет собой наиболее важный заголовок первого уровня`, attributesOfH1);
//         let span = new Tags('span', `Тег <span> предназначен для определения строчных элементов документа`, attributesOfSpan);
//         let input = new Tags('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем`, attributesOfInput);
//         let form = new Tags('form', `Тег <form> устанавливает форму на веб-странице`, attributesOfForm);
//         let option = new Tags('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>`, attributesOfOption);
//         let select = new Tags('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее`, attributesOfSelect);
//
//         console.log(a);
//         console.log(div);
//         console.log(h1);
//         console.log(span);
//         console.log(input);
//         console.log(form);
//         console.log(option);
//         console.log(select);
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {
//     model: 'Mercedes-Benz',
//     producer: 'German',
//     yearOfCreate: 2019,
//     maxSpeed: 300,
//     engine: 2.5,
//     drive: function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     info: function (){
//         console.log(
//             `model: ${this.model}
//             producer: ${this.producer}
//             yearOfCreate: ${this.yearOfCreate}
//             maxSpeed: ${this.maxSpeed}
//             engine: ${this.engine}
//             driver: ${this.driver.name}`
//         );
//     },
//     increaseMaxSpeed: function (newSpeed){
//         this.maxSpeed += newSpeed;
//     },
//     changeYear: function (newValue){
//         this.yearOfCreate = newValue;
//     },
//     addDriver: function (driver){
//         this.driver = driver;
//     }
// };
// let driver = {
//     name: 'Vasya',
//     age: 18
// };
// car.drive();
// car.addDriver(driver);
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// console.log(car);

//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model, producer, yearOfCreate, maxSpeed, engine){
//     this.model = model;
//     this.producer =  producer;
//     this.yearOfCreate = yearOfCreate;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function (){
//         console.log(
//             `model: ${this.model}
//             producer: ${this.producer}
//             yearOfCreate: ${this.yearOfCreate}
//             maxSpeed: ${this.maxSpeed}
//             engine: ${this.engine}
//             driver: ${this.driver.name}`
//         );
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue){
//         this.yearOfCreate = newValue;
//     };
//     this.addDriver = function (driver){
//         this.driver = driver;
//     };
// };
// let car = new Car('Mercedes-Benz', 'German', 2019, 300, 2.5);
//
// let driver = {
//     name: 'Vasya',
//     age: 18
// };
// car.drive();
// car.addDriver(driver);
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// console.log(car);


// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car{
//     constructor(model, producer, yearOfCreate, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.yearOfCreate = yearOfCreate;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info(){
//         console.log(
//             `model: ${this.model}
//             producer: ${this.producer}
//             yearOfCreate: ${this.yearOfCreate}
//             maxSpeed: ${this.maxSpeed}
//             engine: ${this.engine}
//             driver: ${this.driver.name}`
//         );
//     };
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     };
//     changeYear(newValue){
//         this.yearOfCreate = newValue;
//     };
//     addDriver(driver){
//         this.driver = driver;
//     };
// }
// let car = new Car('Mercedes-Benz', 'German', 2019, 300, 2.5);
//
// let driver = {
//     name: 'Vasya',
//     age: 18
// };
// car.drive();
// car.addDriver(driver);
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// console.log(car);

//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// class Prince extends Cinderella{
//     constructor(name, age, shoe) {
//         super();
//         this.shoe = shoe;
//     }
//     searchCinderella(){
//         let search = null;
//         for (const item of array) {
//             if(item.footSize === this.shoe){
//                 search = item;
//             }
//         }
//         console.log('Cinderella name: ' + search.name);
//         console.log(search);
//     }
// }
// let cinderella1 = new Cinderella('Anna', 18, 36);
// let cinderella2 = new Cinderella('Karina', 22, 39);
// let cinderella3 = new Cinderella('Olya', 28, 40);
// let cinderella4 = new Cinderella('Lilya', 30, 35);
// let cinderella5 = new Cinderella('Diana', 40, 36.5);
// let cinderella6 = new Cinderella('Oksana', 15, 38);
// let cinderella7 = new Cinderella('Tanya', 14, 37);
// let cinderella8 = new Cinderella('Nastya', 27, 37.5);
// let cinderella9 = new Cinderella('Ilona', 11, 41);
// let cinderella10 = new Cinderella('Vika', 45, 43);
// let array = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
// let prince = new Prince('Vasya', 20, 36);
// prince.searchCinderella(array);
//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
// };
// function Prince(name, age, shoe){
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     this.searchCinderella = function(array){
//         let search = null;
//         for (const item of array) {
//             if(item.footSize === this.shoe){
//                 search = item;
//             }
//         }
//         console.log('Cinderella name: ' + search.name);
//         console.log(search);
//     }
// };
// let cinderella1 = new Cinderella('Anna', 18, 36);
// let cinderella2 = new Cinderella('Karina', 22, 39);
// let cinderella3 = new Cinderella('Olya', 28, 40);
// let cinderella4 = new Cinderella('Lilya', 30, 35);
// let cinderella5 = new Cinderella('Diana', 40, 36.5);
// let cinderella6 = new Cinderella('Oksana', 15, 38);
// let cinderella7 = new Cinderella('Tanya', 14, 37);
// let cinderella8 = new Cinderella('Nastya', 27, 37.5);
// let cinderella9 = new Cinderella('Ilona', 11, 41);
// let cinderella10 = new Cinderella('Vika', 45, 43);
// let array = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
// let prince = new Prince('Vasya', 20, 36);
// prince.searchCinderella(array);