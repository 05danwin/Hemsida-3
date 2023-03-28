const buttonRight = document.getElementById("höger-scroll-knapp");
const buttonLeft = document.getElementById("vänster-scroll-knapp");

buttonRight.onclick = function () {
    document.getElementById("produktlista").scroll({
      left: document.getElementById("produktlista").scrollLeft + 700,
      behavior: "smooth"
    });
  };
  buttonLeft.onclick = function () {
    document.getElementById("produktlista").scroll({
      left: document.getElementById("produktlista").scrollLeft - 700,
      behavior:"smooth" 
    });
  };
