// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

// function myDay () {
//         console.log('Мій розпорядок дня!');
//         console.log('День починається...');
//         setTimeout(() => {
//             console.log('Просинаюся');
//             brushTeeth(true);
//         }, 2000);
// function breakfast(foods){
//         setTimeout(() => {
//             if (!foods) {
//                 console.log('Треба сходити в магазин, бо їсти нема чого');
//                 return;
//             }
//             console.log('Починаю снідати');
//             listenLectures();
//         }, 3000);
// };
// function brushTeeth (brush){
//         setTimeout(() => {
//             if (!brush) {
//                 console.log('Закінчилася зубна паста, треба сходити в магазин');
//                 return;
//             }
//             console.log('Чищу зуби');
//             breakfast(true);
//         }, 1500);
// };
// function listenLectures(lecture){
//         setTimeout(() =>{
//             console.log('Слухаю лекції з університету');
//             goForAWalk(false);
//         }, 7000);
// };
// function goForAWalk (rain){
//         setTimeout(() => {
//             if (rain) {
//                 console.log('Падає дощ, сиджу вдома');
//                 return;
//             }
//             console.log('Іду гуляти на вулицю');
//             watchVideo(true);
//         }, 3500);
// };
// function watchVideo (internet){
//         setTimeout(() => {
//             if (!internet) {
//                 console.log('Немає інтернету');
//                 return;
//             }
//             console.log('Дивлюся відео на Youtube');
//             goToBed();
//         }, 4700);
// };
// function goToBed(){
//         setTimeout(() =>{
//             console.log('Іду лягати спати');
//             end();
//         }, 6000);
// };
//
// function end() {
//     setTimeout(() => {
//         console.log('Мій розпорядок дня закінчився!');
//     }, 1000);
// };
// };
// myDay();






// function myDay () {
//     return new Promise((resolve) => {
//         console.log('Мій розпорядок дня!');
//         console.log('День починається...');
//         setTimeout(() => {
//             resolve('Просинаюся');
//         }, 2000);
//     });
// };
//
// function breakfast(foods){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!foods) {
//                 reject('Треба сходити в магазин, бо їсти нема чого');
//             }
//             resolve('Починаю снідати');
//             }, 3000);
//     });
// };
// function brushTeeth (brush){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!brush) {
//                 reject('Закінчилася зубна паста, треба сходити в магазин');
//             }
//             resolve('Чищу зуби');
//         }, 1500);
//     });
// };
// function listenLectures(lecture){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Слухаю лекції з університету');
//         }, 7000);
//     });
// };
// function goForAWalk (rain){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (rain) {
//                 reject('Падає дощ, сиджу вдома');
//             }
//             resolve('Іду гуляти на вулицю');
//         }, 3500);
//     });
// };
// function watchVideo (internet){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!internet) {
//                 reject('Немає інтернету');
//             }
//             resolve('Дивлюся відео на Youtube');
//         }, 4700);
//     });
// };
// function goToBed(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Іду лягати спати');
//         }, 6000);
//     });
// };
//
// myDay()
//     .then(wakeUpMes => {
//         console.log(wakeUpMes);
//         return brushTeeth(true);
// })
//     .then(brushTeethMes =>{
//     console.log(brushTeethMes);
//         return breakfast(true);
// })
//     .then(breakfastMes =>{
//         console.log(breakfastMes);
//         return listenLectures();
//     })
//     .then(listenLecturesMes =>{
//         console.log(listenLecturesMes);
//         return goForAWalk(false);
//     })
//     .then(goForAWalkMes =>{
//         console.log(goForAWalkMes);
//         return watchVideo(true);
//     })
//     .then(watchVideoMes =>{
//         console.log(watchVideoMes);
//         return goToBed();
//     })
//     .then(goToBedMes =>{
//         console.log(goToBedMes);
//     })
//     .catch(brushTeethMes =>{
//         console.log(brushTeethMes);
//     })
//     .catch(breakfastMes =>{
//         console.log(breakfastMes);
//     })
//     .catch(listenLecturesMes =>{
//         console.log(listenLecturesMes);
//     })
//     .catch(goForAWalkMes =>{
//         console.log(goForAWalkMes);
//     })
//     .catch(watchVideoMes =>{
//         console.log(watchVideoMes);
//     })
//     .finally(() =>{
//         console.log('Мій розпорядок дня закінчився!');
//     })