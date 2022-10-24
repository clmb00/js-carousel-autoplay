const imgList = [
  "01.jpg", 
  "02.jpg", 
  "03.jpg", 
  "04.jpg", 
  "05.jpg", 
];
let counter = 0;

document.getElementById("up").addEventListener('click', function(){
  counter --;
  document.querySelector('#main_img img').src = "../img/" + imgList[counter];
});

document.getElementById("down").addEventListener('click', function(){
  counter ++;
  document.querySelector('#main_img img').src = "../img/" + imgList[counter];
});