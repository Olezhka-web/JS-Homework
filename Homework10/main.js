// - создать массив с 20 числами.
// let arr = [1, 4, 8, 6, 3, 7, 2, 5, 9, 10, 24, 47, 96, 104, 27, 36, 42, 78, 65, 55];
// -- при помощи метода sort и колбека  отсортировать массив.
// let newArr = arr.sort((a, b) => a - b);
// console.log(newArr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let newArr = arr.sort((a, b) => b - a);
// console.log(newArr);

// -- при помощи filter получить числа кратные 3
// let arr = [1, 0, 8, 6, 3, 7, 2, 5, 9, 10, 24, 47, 96, 104, 27, 36, 42, 78, 65, 55];
// let newArr = arr.filter(value => value % 3 === 0 && value !== 0);
// console.log(newArr);

// -- при помощи filter получить числа кратные 10
// let arr = [1, 0, 8, 6, 3, 7, 2, 5, 9, 10, 24, 47, 96, 104, 27, 36, 42, 78, 65, 55];
// let newArr = arr.filter(value => value % 10 === 0 && value !== 0);
// console.log(newArr);

// -- перебрать (проитерировать) массив при помощи foreach()
// let arr = [1, 0, 8, 6, 3, 7, 2, 5, 9, 10, 24, 47, 96, 104, 27, 36, 42, 78, 65, 55];
// let newArr = arr.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let arr = [1, 0, 8, 6, 3, 7, 2, 5, 9, 10, 24, 47, 96, 104, 27, 36, 42, 78, 65, 55];
// let newArr = arr.map(value => value *3);
// console.log(newArr);

// - создать массив со словами на 15-20 элементов.
// let arr = ['Nice', '4', 'Anna', '7', '1', '3', 'People', 'Apple', '8', 'Shop', 'OWU', '77', '44', 'Zero', 'Zoo'];

// -- отсортировать его по алфавиту в восходящем порядке.
// let newArr = arr.sort((a, b) => {
//     if(a > b){
//         return 1;
//     }
//     return -1;
// });
// console.log(newArr);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let newArr = arr.sort((a, b) => {
//     if(a > b){
//         return -1;
//     }
//     return 1;
// });
// console.log(newArr);

// -- отфильтровать слова длиной менее 4х символов
// let newArr = arr.filter(value => value.length < 4)
// console.log(newArr);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let newArr = arr.map(value => value + '!')
// console.log(newArr);

//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//     let arr = JSON.parse(JSON.stringify(users));
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let newUsers = arr.sort((a, b) => a.age - b.age)
// console.log(newUsers);

// let newUsers = arr.sort((a, b) => b.age - a.age)
// console.log(newUsers);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let newUsers = arr.sort((a, b) => a.name.length - b.name.length)
// console.log(newUsers);

// let newUsers = arr.sort((a, b) => b.name.length - a.name.length)
// console.log(newUsers);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let newUsers = arr.map((user) => {
//     user.id = Math.floor(Math.random()*100+1);
//     return user;
// });

// - відсортувати його за індентифікатором
// newUsers.sort((a , b) => a.id - b.id);
// console.log(newUsers);
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// let number1 = +prompt('Enter number1: ');
// let number2 = +prompt('Enter number2: ');
// let action = prompt('Enter action: ');
// function calculator(a, b, callback){
//     return callback(a,b);
// };
// let result = calculator(number1, number2, (a,b) => {
//     if(action === '+') return a + b;
//     if(action === '-') return a - b;
//     if(action === '*') return a * b;
//     if(action === '/') return a / b;
// });
// console.log(result);
// -- наисать функцию калькулятора с 3мя числами и колбеком
// let number1 = +prompt('Enter number1: ');
// let number2 = +prompt('Enter number2: ');
// let action1 = prompt('Enter action1: ');
// let number3 = +prompt('Enter number3: ')
// let action2 = prompt('Enter action2: ');
// function calculator(a, b, c, callback){
//     return callback(a, b, c);
// };
// let result = calculator(number1, number2, number3, (a, b, c) => {
//     if(action1 === '+' && action2 ==='+') return a + b + c;
//     if(action1 === '-' && action2 ==='-') return a - b - c;
//     if(action1 === '*' && action2 ==='*') return a * b * c;
//     if(action1 === '/' && action2 ==='/') return a / b / c;
//     if(action1 === '+' && action2 ==='-') return a + b - c;
//     if(action1 === '+' && action2 ==='*') return a + b * c;
//     if(action1 === '+' && action2 ==='/') return a + b / c;
//     if(action1 === '-' && action2 ==='+') return a - b + c;
//     if(action1 === '-' && action2 ==='*') return a - b * c;
//     if(action1 === '-' && action2 ==='/') return a - b / c;
//     if(action1 === '*' && action2 ==='+') return a * b + c;
//     if(action1 === '*' && action2 ==='-') return a * b - c;
//     if(action1 === '*' && action2 ==='/') return a * b / c;
//     if(action1 === '/' && action2 ==='+') return a / b + c;
//     if(action1 === '/' && action2 ==='-') return a / b - c;
//     if(action1 === '/' && action2 ==='*') return a / b * c;
// });
// console.log(result);

 //Ну можна було придумати ще з дужками, яка дія виконується перше, но зробив так простенько :)))

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// function myFunk(arr, element){
//     let min = null;
//     let max = null;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === element){
//             if(!min) {
//                 min = i;
//             }
//             max = i;
//         }
//     }
//     if(!min){
//         console.log(-1);
//     }
//     console.log('MinIndex =' + ' ' + min + '   ' + 'MaxIndex =' + ' ' + max);
// };
// myFunk(arr, 4);

//Можна ще так
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// function myFunk(arr, element){
//     let min = arr.indexOf(element);
//     let max = arr.lastIndexOf(element);
//     console.log('MinIndex =' + ' ' + min + '   ' + 'MaxIndex =' + ' ' + max);
// };
// myFunk(arr, 4);