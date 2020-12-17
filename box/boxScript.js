let button = document.getElementsByClassName('button')[0];
let buttonB = document.getElementsByClassName('Bbutton')[0];
let box = document.getElementsByClassName('box')[0];
let countW = document.getElementsByClassName('count-w')[0];
let countT = document.getElementsByClassName('count-t')[0];
let countB = document.getElementsByClassName('count-b')[0];
let wCount = 1;
let tCount = 1;
let bCount = 1;
let isAnimated = false;

button.addEventListener('click', () => {
  box.classList.toggle('active');
}, false);

buttonB.addEventListener('click', () => {
  if(isAnimated){
    return;
  }
  buttonB.value = "アニメーション中";
  console.log(box);
  box.classList.add('btn-animation');
  isAnimated = true;
}, false);

box.addEventListener('animationend', () => {
  bCount++;
  buttonB.value = "アニメーション開始";
  box.classList.remove('btn-animation');
  if(countB.hasChildNodes()){
    countB.innerHTML = '';
  }
  countB.appendChild(document.createTextNode(bCount++));
  isAnimated = false;
}, false);

box.addEventListener('transitionend', e => {
  console.log(e);
  if(e.propertyName === 'width') {
    if(countW.hasChildNodes()){
      countW.innerHTML = '';
    }
    countW.appendChild(document.createTextNode(wCount++));
  } else if(e.propertyName === 'transform') {
    if(countT.hasChildNodes()){
      countT.innerHTML = '';
    }
    countT.appendChild(document.createTextNode(tCount++));
  }
});
