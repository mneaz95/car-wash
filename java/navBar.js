var services = document.getElementById("services");

//

//


function navToggle(){
   if(document.getElementById("mainNavBar").classList.contains("navHide")){
      document.getElementById("mainNavBar").classList.replace("navHide","navShow");
      
    }else if( document.getElementById("mainNavBar").classList.contains("navShow")){
      document.getElementById("mainNavBar").classList.replace("navShow","navHide");
    }
}

services.addEventListener("mouseover", function(event){
  document.getElementById("propane").classList.replace("hideServices","showServices");
  document.getElementById("detail").classList.replace("hideServices","showServices");
});


