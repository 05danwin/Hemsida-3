function fadeOutImageAndFadeInText() {
    let image = document.getElementById("hero");
    let fadeRubrik = document.getElementById("heroRubrik");
    let fadeText = document.getElementById("heroText");
    let opacity1 = 1;
    let opacity2 = 0;
    let opacity3 = 0;
  
    image.style.transition = "opacity 1s cubic-bezier(0.2, 0.3, 0.5, 1)";
    fadeRubrik.style.transition = "opacity 1s cubic-bezier(0.1, 0.1, 0.8, 1)";
    fadeText.style.transition = "opacity 1s cubic-bezier(0.1, 0.1, 0.8, 1)";
  
    let timer = setInterval(function() {
      if (opacity1 <= 0.5 || opacity2 >= 1) {
        clearInterval(timer);
      }
      image.style.opacity = opacity1;
      fadeText.style.opacity = opacity2;
      fadeRubrik.style.opacity = opacity3;
      opacity1 -= 0.005;
      opacity2 += 0.01;
      opacity3 += 0.01;
    }, 10);
  }
  
  window.onload = fadeOutImageAndFadeInText;
  