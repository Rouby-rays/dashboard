const name = 'vitebsk.furniland';

const followersNumberField = document.querySelector('#current-followers');
const followsNumberField = document.querySelector('#current-follows');
const profileName = document.querySelector('#profile-name');
const followsArrayField = document.querySelector('#follows-array');               //Поле ввода массива подписок
const clearButtonFollows = document.querySelector('#clear-follows-array');        //Кнопка
const clearButtonFollowers = document.querySelector('#clear-followers-array');    //Кнопка

//Информация об аккаунте
//profileName.textContent = name;

//Показатели аккаунта
//const followersCount = followers.length;


followersNumberField.textContent = followersNew.length;
followsNumberField.textContent = follows.length;
console.log(mutFollow.length);
/*
clearButtonFollows.addEventListener('click', function() {
  followsArrayField.textContent = ' ';
  console.log('ii');
})
*/
