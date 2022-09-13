var propaneDivOne = document.getElementById("propaneDiv1");
var propaneDivTwo = document.getElementById("propaneDiv2");

window.onscroll = function(){
  if(window.scrollY>20){
    propaneDivOne.classList.replace("hideDiv1","showDiv1");
  }
  if(window.scrollY>450){
    propaneDivTwo.classList.replace("hideDiv2","showDiv2");
  }
}






