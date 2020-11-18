// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textarea = document.getElementById('textarea');
// textarea.oninput = () => {
//     localStorage.setItem('text', textarea.value);
// }
// textarea.value = localStorage.getItem('text');

//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// let form = document.getElementById('form');
// form.oninput = () =>{
//     save(form);
// }
// getForm(form);
// function save(tag){
//     myFunk(tag);
// }
//
// function myFunk(tag){
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//         if(tagElement.type === 'checkbox'|| tagElement.type === 'radio'){
//             if(tagElement.checked){
//                 tagElement.value = true;
//             } else{
//                 tagElement.value = false;
//             }
//         }
//         localStorage.setItem(tagElement.id, tagElement.value);
//     }
// }
// function getForm(tag){
//     for (let i = 0; i < localStorage.length; i++) {
//        if(localStorage.hasOwnProperty(tag.children[i].id)){
//            tag.children[i].value = localStorage.getItem(tag.children[i].id);
//            if(tag.children[i].value === 'true'){
//                tag.children[i].setAttribute('checked', 'checked');
//            }
//        }
//
//     }
// }


//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let text = document.getElementById('text');
// let btnLeft = document.getElementById('btn-left');
// let btnRight = document.getElementById('btn-rigth');
// let btnSave = document.getElementById('save');
// let save = btnSave.onclick = () =>{
//     localStorage.setItem(localStorage.length+1, text.value);
// };
// btnLeft.onclick = () => {
//     let index;
//     for (const key in localStorage) {
//         if(localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key) === text.value){
//                 index = key;
//             }
//         }
//     }
//     if(index === '1'){
//         alert('The end');
//         return;
//     }
//     text.value = localStorage.getItem(index - 1);
// };
//
// btnRight.onclick = () => {
//     let index;
//     for (const key in localStorage) {
//         if(localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key) === text.value){
//                 index = key;
//             }
//         }
//     }
//     if(index === localStorage.length.toString()){
//         alert('The end');
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1);
// };

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
// const ARRAY_USERS = 'ARRAY_USERS';
// let tempUser = {};
// let form2 = document.forms.form2;
// let content = document.getElementById('content');
//
// form2.submit.onclick = ev =>{
//     // ev.preventDefault();
//     let person = {...tempUser};
//     tempUser = {};
//     for (let i = 0; i < form2.children.length; i++) {
//         const formElement = form2.children[i];
//         if(formElement.name && formElement.type !== 'submit'){
//             person[formElement.name] = formElement.value;
//         }
//     }
//     console.log(person);
//     if(!person.id){
//         person.id = new Date().getTime();
//     }
//     save(person);
// };
// getDataFromStorage();
//
// function save(user){
//     if(localStorage.hasOwnProperty(ARRAY_USERS)){;
//         let arrUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
//         let find = arrUsers.find(value => value.id === user.id);
//         if(find){
//             let filter = arrUsers.filter = arrUsers.filter(value => value.id !== user.id);
//             filter.push(user);
//             localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
//         } else {
//             arrUsers.push(user);
//             localStorage.setItem(ARRAY_USERS, JSON.stringify(arrUsers));
//         }
//     } else {
//         localStorage.setItem(ARRAY_USERS,JSON.stringify([user]));
//     }
// }
//
// function getDataFromStorage(){
//     if(localStorage.hasOwnProperty(ARRAY_USERS)){
//         let arrayUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
//         for(const user of arrayUser){
//             content.appendChild(createDivUser(user));
//         }
//     }
// }
//
// function createDivUser (user){
//     let main = document.createElement('div');
//     let flag = true;
//     for (const key in user) {
//         if(flag){
//             let h3 = document.createElement('h3');
//             h3.innerText = key + ' : ' + user[key];
//             main.appendChild(h3);
//             flag = false;
//         } else{
//             let p = document.createElement('p');
//             p.innerText = key + ' : ' + user[key];
//             main.appendChild(p);
//         }
//     }
//     main.style = 'width: 300px; border: red solid 1px; float: left';
//     let b1 = document.createElement('button');
//     let b2 = document.createElement('button');
//     b1.innerText = 'Edit';
//     b2.innerText = 'Delete';
//     b1.onclick = function (){
//         editUser(user.id);
//     }
//     b2.onclick = function (){
//         deleteUser(user.id);
//     }
//
//     main.appendChild(b1);
//     main.appendChild(b2);
//     return main;
// }
//
// function deleteUser(id){
//     let parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
//     let filter = parse.filter(user => user.id !== id);
//     localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
//     location.reload();
// }
//
// function editUser(id){
//     let parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
//     let user = parse.find(user => user.id === id);
//     for (let i = 0; i < form2.children.length; i++) {
//         const formElement = form2.children[i];
//         if(formElement.name && formElement.type !== 'submit'){
//             for (const key in user) {
//                 if(formElement.name === key){
//                     formElement.value = user[key];
//                 }
//             }
//         }
//     }
//     tempUser = user;
// }
