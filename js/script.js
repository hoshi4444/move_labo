let button = document.getElementsByClassName('button')[0];
let box = document.getElementsByClassName('box')[0];
console.log(box);

if(button){
  button.addEventListener('click', () => {
    box.classList.toggle('active');
  }, false);
}