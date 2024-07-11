var currentAudio = null;

function playAudio(audioFile) {


    currentAudio = new Audio(audioFile);
    currentAudio.play();
}

function buttonClick(button) {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);
  }
