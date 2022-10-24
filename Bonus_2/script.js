const imgList = [
  "01.jpg", 
  "02.jpg", 
  "03.jpg", 
  "04.jpg", 
  "05.jpg", 
];
let counter = 0;
let thumb = "";

for( i=0 ; i < imgList.length ; i++){
  if(i){
    thumb = `<img class="thumb black_op" src="../img/${imgList[i]}">`;
  } else {
    thumb = `<img class="thumb active" src="../img/${imgList[i]}">`;
  }
  document.getElementById('aside_bar').innerHTML += thumb;
};

const thumbElements = document.getElementsByClassName('thumb');

document.getElementById("up").addEventListener('click', function(){
  thumbElements[counter].classList.replace('active', 'black_op');
  counter --;
  if (counter<0){
    counter = imgList.length - 1;
  };
  thumbElements[counter].classList.replace('black_op', 'active');
  document.querySelector('#main_img img').src = "../img/" + imgList[counter];
});

document.getElementById("down").addEventListener('click', function(){
  thumbElements[counter].classList.replace('active', 'black_op');
  counter ++;
  if (counter>imgList.length - 1){
    counter = 0;
  };
  thumbElements[counter].classList.replace('black_op', 'active');
  document.querySelector('#main_img img').src = "../img/" + imgList[counter];
});

