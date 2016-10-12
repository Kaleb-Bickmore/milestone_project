document.getElementById("twitter").onclick=function(){
window.location.replace("https//:twitter.com"); 
}
document.getElementById("insta").onclick=function(){
window.location.href="https//:instagram.com"; 
}
document.getElementById("facebook").onclick=function(){
window.top.location.href="https//:facebook.com"; 
}
document.getElementById("contactUs").onclick=//function(){

// window.location.href="/contact.html"; 
//}
function myMove() {
  var elem = document.getElementById("soda");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
     // elem.style.left = pos + 'px';
    }
  }
}