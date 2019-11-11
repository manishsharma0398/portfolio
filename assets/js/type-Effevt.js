window.addEventListener("DOMContentLoaded", ready);

function ready() {
  document.querySelector(".loader").remove();
  document.querySelector(".navbar").classList.add("fixed-top");
  var text = ["Photographer", "Web Developer", "Creative Person", "Programmer"];
  var counter = 0;
  var elem = document.getElementById("words");
  setInterval(() => {
    change();
  }, 4000);

  function change() {
    elem.style.animation = "fadein 4s infinite";
    elem.innerHTML = text[counter];
    // document.getElementById("changing-box").style.transition =
    //   "all 1s infinite";
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
  }
}
