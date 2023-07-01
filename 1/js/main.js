// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели.
// function week(number) {
//     let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//     if (number >= 1 && number <= 7) {
//       return week[number - 1];
//     } else {
//       return 'В неделе только 7 дней';
//     }
//   }
//   console.log(week(8));

// 2. Дан список дел в формате: [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ], задача: принимать от пользователя id того, что он сделал и менять статус на true, 
// также должна быть возможность добавлять новые пункты дел, учесть, что айди должен быть уникальным

// let todos = [
//     {id: 1, todo: 'Принять душ', done: false},
//     {id: 2, todo: 'Завтрак', done: false},
//     {id: 3, todo: 'Пойти на работу', done: false},
//     {id: 4, todo: 'Приготовить ужин', done: false},
//     {id: 5, todo: 'Лечь спать', done: false}
// ];

// function todo2(id) {
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id === id) {
//             todos[i].done = true;
//             break;
//         }
//     }
// }
// function newTodo(todo) {
//     const ids = todos.map(item => item.id);
//     const maxId = Math.max(...ids);
//     const newTodo = {
//         id: maxId + 1,
//         todo: todo,
//         done: false
//     };
//     todos.push(newTodo);
// }
// console.log(todos); // Выводим список дел до изменений

// todo2(2); // Помечаем задачу с id 2 как выполненную

// console.log(todos); // Выводим список дел после изменений

// newTodo('Купить продукты'); // Добавляем новую задачу

// console.log(todos); // Выводим список дел после добавления новой задачи


// 3. Дан список товаров следующего вида: [
//     {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},  
//     {title: 'Xiaomi', price: 600, count: 0, color: []},
//     {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//     {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
// ], задача: запросить у пользователя информацию о том, какой телефон он бы хотел приобрести,
//  затем предложить ему варианты расцветки телефона, после того как пользователь введет цвет, 
// озвучить цену на товар и спросить будет ли он покупать, если ответ положительный то количество товара нужно 
// уменьшить на 1, учесть, что товара может не быть на складе, в этом случае вывести сообщение типа: 
// Извините, в данный момент товара нет на складе

// let products = [
//         {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//         {title: 'Xiaomi', price: 600, count: 0, color: []},
//         {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//         {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}]

// function purchaseProduct() {
//     const desiredProduct = prompt('Какой телефон вы хотите приобрести?');
    
//     let selectedProduct;
//     for (let i = 0; i < products.length; i++) {
//       if (products[i].title === desiredProduct) {
//         selectedProduct = products[i];
//         break;
//       }
//     }
    
//     if (!selectedProduct) {
//       confirm('Извините, такого товара нет');
//       return;
//     }
    
//     const desiredColor = prompt('Выберите цвет из доступных вариантов: ' + selectedProduct.color.join(', '));
    
//     if (!selectedProduct.color.includes(desiredColor)) {
//       confirm('Извините, такого цвета нет');
//       return;
//     }
    
//     confirm('Цена на товар:', selectedProduct.price);
    
//     const purchaseConfirmation = confirm('Будете ли вы покупать этот товар?');
    
//     if (purchaseConfirmation) {
//       if (selectedProduct.count === 0) {
//         confirm('Извините, товара нет на складе');
//         return;
//       }
      
//       selectedProduct.count--;
//       confirm('Товар успешно куплен');
//     } else {
//       confirm('Покупка отменена');
//     }
//   }
  
//   purchaseProduct();
// 4. Сортировка по цене. Дан массив: 
// [
//   {title: 'Samsung S20', price: 1000}, 
//   {title: 'Samsung A31', price: 200}, 
//   {title: 'Samsung S10', price: 600}, 
//   {title: 'Xiaomi Mi 10', price: 400}, 
//   {title: 'Xiaomi Redmi 8', price: 300}, 
//   {title: 'iPhone 13', price: 1100}, 
//   {title: 'iPhone 11', price: 800}
// ],
// задача: запросить у пользователя диапазон цен от и до(необходимо получить информацию за один запрос) 
// затем найти подходящие товары и вывести пользователю в формате: Название товара - цена
// let products = [
//     {title: 'Samsung S20', price: 1000}, 
//     {title: 'Samsung A31', price: 200}, 
//     {title: 'Samsung S10', price: 600}, 
//     {title: 'Xiaomi Mi 10', price: 400}, 
//     {title: 'Xiaomi Redmi 8', price: 300}, 
//     {title: 'iPhone 13', price: 1100}, 
//     {title: 'iPhone 11', price: 800}
//   ];
  
//   function filterProducts() {
//     let min = parseInt(prompt('Введите минимальную цену:'));
//     let max = parseInt(prompt('Введите максимальную цену:'));
    
//     let filteredProducts = products.filter(product => {
//       return product.price >= min && product.price <= max;
//     });
    
//     if (filteredProducts.length === 0) {
//       alert('Товары с такими ценами не найдены');
//       return;
//     }
    
//     filteredProducts.forEach(product => {
//       confirm(product.title + ' - ' + product.price);
//     });
//   }
  
//   filterProducts();


// 5. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 
// 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), 
// также каждому герою присваивается имя по умолчанию(герой 1, герой 2), 
// каждая стихия повышает силу героя на определенное количество пунктов
// (огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), 
// после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам
// (победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, 
// то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, 
// в том случае если победителя нет

// let heroes = [];

// function createHero() {
//   const hero = {};
//   hero.name = prompt('Введите имя героя:');
//   hero.power = parseInt(prompt('Введите силу героя (максимальное значение: 100):'));
//   hero.agility = parseInt(prompt('Введите ловкость героя (максимальное значение: 100):'));
//   hero.element = prompt('Введите стихию героя (огонь, земля, вода, воздух):');
  
//   switch (hero.element) {
//     case 'огонь':
//       hero.power += 20;
//       break;
//     case 'воздух':
//       hero.power += 15;
//       break;
//     case 'вода':
//       hero.power += 10;
//       break;
//     case 'земля':
//       hero.power += 5;
//       break;
//     default:
//       alert('Неверно указана стихия героя');
//       return;
//   }
  
//   heroes.push(hero);
// }

// function fight() {
//   if (heroes.length < 2) {
//     console.log('Недостаточно героев для проведения боя');
//     return;
//   }
  
//   const hero1 = heroes[0];
//   const hero2 = heroes[1];
  
//   if (hero1.power > hero2.power) {
//     alert(hero1.name + ' побеждает!');
//   } else if (hero1.power < hero2.power) {
//     alert(hero2.name + ' побеждает!');
//   } else if (hero1.agility > hero2.agility) {
//     alert(hero1.name + ' побеждает!');
//   } else if (hero1.agility < hero2.agility) {
//     alert(hero2.name + ' побеждает!');
//   } else {
//     alert('Ничья');
//   }
// }

// createHero();
// createHero();
// fight();
// Решение всех задач должно быть в одном файле, файл залить в гитхаб, ссылку прикрепить в классрум