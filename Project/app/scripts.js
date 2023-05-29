// container / content 0 / img changer
var index = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) { index = 1 }    
  x[index-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
} 

// play and pause video
var video = document.getElementById("myVideo");
var btn = document.getElementById("content3btn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
