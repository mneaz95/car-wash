var gallery1 = document.getElementById("gallery-blurb");
var gallery2 = document.getElementById("gallery-zoomInDown");
var gallery3 = document.getElementById("icon-animate");
var gallery4 = document.getElementById("ptag-zoomInDown");
var gallery5 = document.getElementById("image-div");





window.onscroll = function(){
    if(window.scrollY>1100){
    gallery1.classList.add("blurb");
    gallery2.classList.add("zoomInDown");
    gallery3.classList.add("jackInTheBox");
    gallery4.classList.add("zoomInUp");
    gallery5.classList.add("fadeIn");
  }
}

