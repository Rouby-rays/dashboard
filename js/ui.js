const name = 'vitebsk.furniland';

//Полевывода текущего количества подписчиков
const followersNumberField = document.querySelector('#current-followers');
//Поле вывода текущего количества подписок
const followsNumberField = document.querySelector('#current-follows');
//Поле вывода текущего количества взаимных подписок
const currentMutFollowsField = document.querySelector('#current-mut-follows');
//Поле вывода текущего количества не взаимных подписок
const currentNotMutFollowsField = document.querySelector('#current-not-mut-follows');
const profileName = document.querySelector('#profile-name');


console.log('Подписчиков ' + followers.length);
console.log('Подписок: ' + follows.length);

//Вывод текущего количества подписчиков
followersNumberField.textContent = followersNew.length;

//Вывод текущего количества подписок
followsNumberField.textContent = follows.length;

 //Вывод количества взаимных подписок
currentMutFollowsField.textContent = mutFollow.length;

 //Вывод количества не взаимных подписок
 currentNotMutFollowsField.textContent = notMutFollows.length;

/*
clearButtonFollows.addEventListener('click', function() {
  followsArrayField.textContent = ' ';
  console.log('ii');
})
*/

fetch('./db/db.json')
  .then((response) => response.json())
  /*.then((data) => {
    renderItems(data)
  })*/
