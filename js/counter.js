

let searchFoll = '';

// Поиск взаимных подписок путём перебора двух массивов
let mutFollow = [];                                                              //Массив взаимных подписок
for(let i = 0; i <= follows.length; i++) {
  for(let a = 0; a <= followers.length; a++) {
  searchFoll = followers[a];
  if(follows[i] === followers[a]) {
    mutFollow.push(followers[i]);
  }
 }
};

// Поиск аккаунтов без взаимной подписки
let notMutFollows = [];
follows.forEach( function (element) {
    if ( !~followers.indexOf(element) ) notMutFollows.push(element)
});

console.log('Без взаимной подписки: ' + notMutFollows.length + ' аккаунты: ' + notMutFollows);

/*
const resultList = document.querySelector('#result-list')

for(let i = 0; i < result.length; i++) {
const newElem = document.createElement('li');
newElem.textContent = result[i]
resultList.append(newElem);
} */

// Поиск аккаунтов без взаимной подписки
/*
const wiMutFollws = [];
follows.forEach( function (element) {
    if ( !~followers.indexOf(element) ) result.push(element)
});

console.log('Без взаимной подписки: ' + wiMutFollws.length + ' аккаунты: ' + result)

/*
const resultList = document.querySelector('#result-list')

for(let i = 0; i < result.length; i++) {
const newElem = document.createElement('li');
newElem.textContent = result[i]
resultList.append(newElem);

}

// Новые подписчики
let newFollowers = [];
followersNew.forEach( function (element) {
    if ( !~followers.indexOf(element) ) newFollowers.push(element)
});

console.log('Новые подписчики: ' + newFollowers)

*/

/*
var a = ['a', 'b', 'c', 'd'];
var b = ['a', 'b', 'x', 'y', 'z'];
var c = a.filter(n => b.indexOf(n) === -1);
console.log('C: ' + c);
*/

//Отписавшиеся
let unFollow = followers.filter(n => followersNew.indexOf(n) === -1);
console.log('Отписался: ' + unFollow);
