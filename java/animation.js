
var myNav = document.getElementById("mainNavBar");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div1Text = document.getElementById("div1Text");
var div2Text = document.getElementById("div2Text");
var div3Text = document.getElementById("div3Text");
var price1 = document.getElementById("price1");
var price2 = document.getElementById("price2");
var price3 = document.getElementById("price3");
var price4 = document.getElementById("price4");

// var body = document.body;
// For Chrome, Safari and Opera 
// var html = document.documentElement; 
// Firefox and IE places the overflow at the level, unless else is specified
// Therefore, we use the documentElement property for these two browsers


window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0 && window.innerWidth>767) {
    myNav.classList.add("navOther");
  }
  
  
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 && window.innerWidth>767) {
    myNav.classList.add("hello");
    myNav.classList.remove("navOther");
  } else {
    myNav.classList.remove("hello");
    myNav.classList.add("navOther");
  }
  
  if(window.scrollY>470){
    div1.classList.replace("hideDiv1","showDiv1"); 
    div1Text.classList.add("div1Animation");
  }
 
  if(window.scrollY>1100){
    div2.classList.replace("hideDiv2","showDiv2"); 
    div2Text.classList.add("div2Animation");
  }
  
  if(window.scrollY>1750){
    div3.classList.replace("hideDiv3","showDiv3");
    div3Text.classList.add("div3Animation");
  }
  
  
  
  if(window.scrollY>2700){
    price1.classList.add("one");
    price1.classList.add("fade-in");
    
    price2.classList.add("two");
    price2.classList.add("fade-in");
    
    price3.classList.add("three");
    price3.classList.add("fade-in");
    
    price4.classList.add("four");
    price4.classList.add("fade-in");
    
  }

};


