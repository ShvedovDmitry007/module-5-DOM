'use strict';

// Получаем элементы
const items = document.querySelector('.items');
const banner = document.querySelector('.ads');
const item = document.querySelectorAll('.item');
const propsList = document.querySelectorAll('.props__list');
const content = document.querySelectorAll('.content');
const itemTwo = document.querySelectorAll('.props__item_two');
const itemFour = document.querySelectorAll('.props__item_four');

// Добавляем элементы
items.prepend(item[1], item[2], item[3]);
propsList[0].prepend(itemFour[5]);
itemFour[2].after(itemFour[5]);
content[4].append(propsList[3]);
content[3].append(propsList[4]);
content[2].append(itemTwo[8], itemTwo[9]);

banner.remove();
