window.addEventListener("keydown", (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const letter = document.querySelector(`.letter[data-key="${event.keyCode}"]`);
  if (!audio) return; // it stop the function form running which has no audio
  audio.currentTime = 0;
  audio.play();
  letter.classList.add("playing");
  setTimeout(() => {
    letter.classList.remove("playing");
  }, 100);
});
