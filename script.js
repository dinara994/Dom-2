//   Array.from(nodes) - Преобразовать структуру Дом элементов в массив
// Array.from(document.getElementsByClassName('test')).map(it => ...)

// element.textContent = 'Новое значение' - Изменить текстовое значение ноды

// element.parentNode  - Получить доступ к родительской ноде
// document.createElement(tagName) - Создание элемента
// element.innerText = 'text' -  Изменение текста элемента
//element.appendChild(element2) - Добавление потомка в текущий элемент


// element.removeChild(childElement) - Удалить потомок
//  ------Добавление/удаление события события---------
// const eventFunction = (event) => {
//     console.log('clicked')
// }
// element.addEventListener('click', eventFunction) - Добавление
// element.removeEventListener('click', eventFunction) - Удаление





// Элемент в массиве
// let allList = Array.from(document.querySelectorAll('.list-item')) //список из всех элементов
// allList = allList.map((item) => item.textContent)
// console.log(allList)

// let task3 = Array.from(document.querySelectorAll('.nav__link__item')) //список из всех элементов
// task3 = task3.map((item) => item.getAttribute('class'))
// console.log(task3)

let allList = Array.from(document.querySelectorAll('.list-item')) //список из всех элементов
allList = allList.map((item) => item.getAttribute('class'))
console.log(allList)

//МАссив с элементов
let task2 = Array.from(document.querySelectorAll('a'))
task2 = task2.map(el => el.textContent)

console.log(task2)

let task3 = Array.from(document.querySelectorAll('.nav__link__item')) //список из всех элементов
task3 = task3.map((el) => el.textContent)
console.log(task3)

// let task4 = Array.from(document.querySelectorAll('.nav__link__item')) //список из всех элементов
// task4 = task4.map(el => el.getAttribute('class'))
// console.log(task4)
//
// let task5  = Array.from(document.querySelectorAll('.nav__link')) //список из всех элементов, значение сласса
// task5 = task5.map(el => el.getAttribute('data-link')) //значение тегов
// console.log(task5)
//
// //Видео 00:40 минута
// let task6 = Array.from(document.querySelectorAll('.nav__link'))
// task6 = task6.filter(el => !el.getAttribute('class').includes(el.textContent)) // элемент (!el) не равно
//     .map(el => el.getAttribute('data-link'))
// console.log(task6)
//
// let task7 = document.querySelectorAll('.nav__link')
// task7.forEach(item => {
//     item.textContent = `${item.getAttribute('data-link')} ${item.getAttribute('class').split(' ')[1]}`
// })

//которые неправильные содерж-е
// let task8 = document.querySelectorAll('.nav__link')
// task8.forEach(el => {
//     if (!el.getAttribute('class').includes(el.textContent)) {
//         el.remove()
//     }
// })


// docum.body.uppendChild(span)
// let task9 = document.querySelector('#append-div')
// let appDiv = document.createElement('div')
// appDiv.id = 'just-text'
// appDiv.innerText = 'Hello!'
// task9.appendChild(span)
// document.body.appendChild(appDiv) //Вставить на странице
//             console.log(task9)

// let task10 = document.querySelector('#append-div')
// let ul = document.createElement('ul')
// let li = document.createElement('li')
// ul.setAttribute('id', '#list')
// li.innerText = 'Child 1'
// task10.appendChild(ul.appendChild(li))
// for (let i = 1; i <= 10; i++) {
//     console.log( document.body.appendChild(li))
// }
// document.body.appendChild(ul.appendChild(li))

// let task10 = document.querySelector('#append-div')
// let ul = document.createElement('ul')
//
//
// let appendDiv = document.querySelector('#append-div')
// let newUl = appendDiv.appendChild(document.createElement('ul'))
// newUl.id = '#list'
// for (let i = 0; i < 10; i++) {
//     newUl.appendChild(document.createElement('li'))
// }
// let newLi = Array.from(document.querySelectorAll('li'))
// newLi.map((item, idx) => item.textContent = `Child ${idx + 1}`)
























