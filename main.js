// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let block = document.createElement('div');
// block.innerText = 'RedBlck';
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
// block.style.background = 'red';
// block.style.color = 'yellow';
// block.style.fontSize = '25px';
// document.body.appendChild(block);
// let block2 = block.cloneNode(true);
// document.body.appendChild(block2);



// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// for (const element of arr) {
//     let li = document.createElement('li');
//     let menu = document.getElementsByClassName('menu')[0];
//     menu.appendChild(li).innerText = element;
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let p = document.createElement('p');
//     document.body.appendChild(p).innerText = `${element.title} - ${element.monthDuration}`;
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому
// буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     document.body.appendChild(div).classList.add('item');
//     let h1 = document.createElement('h1')
//     h1.innerText = element.title;
//     h1.classList.add('heading');
//     let p = document.createElement('p')
//     p.innerText = element.monthDuration;
//     p.classList.add('description');
//     div.append(h1, p);
// }