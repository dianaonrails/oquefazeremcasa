

function randomCoisas() {
  var lis = document.querySelectorAll('.lista > li');
  var randomCoisas = lis[Math.floor(Math.random() * lis.length)].innerHTML;

  document.getElementById('randomCoisas').innerHTML = randomCoisas;



}