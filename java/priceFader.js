
var wewe1 = document.getElementById("price1");
var price3 = document.getElementById("price3");
var price4 = document.getElementById("price4");


wewe1.addEventListener("click", function(){
  alert("clicked");
});
window.onscroll = function() {
  "use strict";
  if(window.scrollY>700){
   // wewe1.classList.add("showDiv1");
    wewe1.classList.add("one");
  }

    
}