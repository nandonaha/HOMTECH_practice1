function getColor(){
    var elements = "0123456789ABCDEF"
    var color = "#"
    for(var i = 0; i<6; i++){
      color = color + elements[Math.floor(Math.random()*elements.length)]
    }
  return color
  }

  var bg = document.querySelector('body')

  document.addEventListener( "click", function(){
      bg.style.backgroundColor = getColor()
  })


var currentAudio = null;

function playAudio(audioFile) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(audioFile);
    currentAudio.play();
}
