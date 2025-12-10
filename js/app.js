(function () {
  function playSound(code) {
    var selector = 'audio[data-key="' + code + '"]';
    var keySelector = '.key[data-key="' + code + '"]';

    var audio = document.querySelector(selector);
    var key = document.querySelector(keySelector);

    if (!audio || !key) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
  }

  function handleKeyDown(event) {
    var code = event.keyCode || event.which;
    playSound(code);
  }

  function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  function handleClick() {
    var code = this.getAttribute("data-key");
    playSound(code);
  }

  window.addEventListener("keydown", handleKeyDown);

  var keys = document.querySelectorAll(".key");
  keys.forEach(function (key) {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", handleClick);
  });
})();
