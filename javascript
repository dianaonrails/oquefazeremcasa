var coisas = Array("song1", "song2", "song3", "song4", "song5", "song6");

function randomCoisas() {
  var randomSong = song[Math.floor(Math.random() * song.length)];
  document.getElementById('randomSong').value = randomSong;
}