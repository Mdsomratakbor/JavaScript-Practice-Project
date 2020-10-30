function play() {
  let audio = document.createElement("audio");
  audio.setAttribute(
    "src",
    "static/sounds/2016-09-15_-_Darkness_Arrives_David_-_Fesliyan.mp3"
  );
  audio.play();
  window.setTimeout(function(){
  let imageDiv = document.getElementById("horro-image-show");
  imageDiv.appendChild(image());

  },10000);
}
function image(){
  let image = document.getElementById("horro-image-show");
  // image.setAttribute(
  //   "src",
  //   "static/images/b279381706fa3cd968c27de28f43ed23.gif"
  // );
  image.classList.add("card-body-img");
 // image.setAttribute("class", "card-body-img");
  return image;
}




