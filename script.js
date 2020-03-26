var coisas = Array("Ler um livro", "Pintar", "Videojogos", "Arrumar o armário", "Limpar a casa", "Fazer exercício","Fazer um puzzle","Tomar um banho quentinho",
	"Fazer panquecas","Aprender uma língua nova","Dançar","Ver um filme","Jogos de tabuleiro", "Meditar", "Yoga", "Pilates", "Jogo do Stop", "Quizzes", "Experimentar receita nova", "Reorganizar os móveis", "Bricolage", "Jogar ao macaquinho do chinês", "Fazer pão", "Fazer um bolo", "Desenhar", "Visitar um museu online", "Escrever");

function randomCoisas() {
  var randomCoisas = coisas[Math.floor(Math.random() * coisas.length)];
  document.getElementById('randomCoisas').innerHTML = randomCoisas;
}