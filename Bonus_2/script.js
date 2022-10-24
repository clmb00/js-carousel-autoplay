const imgList = [
  "01.jpg", 
  "02.jpg", 
  "03.jpg", 
  "04.jpg", 
  "05.jpg", 
];
let counter = 0;
let thumb = "";
let cicle;
const timeAutoplay = 1000;

for( i=0 ; i < imgList.length ; i++){
  if(i){
    thumb = `<img class="thumb black_op" src="../img/${imgList[i]}">`;
  } else {
    thumb = `<img class="thumb active" src="../img/${imgList[i]}">`;
  }
  document.getElementById('aside_bar').innerHTML += thumb;
};

autoplay();

const thumbElements = document.getElementsByClassName('thumb');

document.getElementById("up").addEventListener('click', changeImageUp);

document.getElementById("down").addEventListener('click', changeImageDown);

const stopAutoplay = () => clearInterval(cicle);

document.querySelector('.container').addEventListener('mouseover', stopAutoplay);

document.querySelector('.container').addEventListener('mouseout', autoplay);

function autoplay(){
  cicle = setInterval(function(){
    changeImageDown();
  }, timeAutoplay);
}

function changeImageDown(){
  thumbElements[counter].classList.replace('active', 'black_op');
  counter ++;
  if (counter>imgList.length - 1){
    counter = 0;
  };
  thumbElements[counter].classList.replace('black_op', 'active');
  document.querySelector('#main_img img').src = "../img/" + imgList[counter];
}

function changeImageUp(){
  thumbElements[counter].classList.replace('active', 'black_op');
  counter --;
  if (counter<0){
    counter = imgList.length - 1;
  };
  thumbElements[counter].classList.replace('black_op', 'active');
  document.querySelector('#main_img img').src = "../img/" + imgList[counter];
}

