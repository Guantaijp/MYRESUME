
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right="0";

const icon = document.getElementById("openbtn")
if(window.innerWidth <= 768){
  icon.style.display="block";
}else{
  icon.style.display="none";

 
}


}



function closemenu(){
  sidemenu.style.right="-300px";
//  const icon = document.getElementById("closebtn")
//  //if the window is less than or equal to 768px wide, display the icon
//   if(window.innerWidth <= 768){
//   icon.style.display="block";
// }else{
//   icon.style.display="none";

  
  
}


window.onresize = closemenu
window.onresize = openmenu
window.onload = openmenu






