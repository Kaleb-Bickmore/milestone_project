
   document.getElementById("twitter").onclick=function(){
window.location.assign("https//:twitter.com" );
window.URL="https//:twitter.com";
};
document.getElementById("insta").onclick=function(){
window.location.href="https//:instagram.com"; 
};
document.getElementById("facebook").onclick=function(){
window.location.href="https//:facebook.com"; 
};
document.getElementById("buttonAfterLife").onclick=function(){
    if(document.getElementById("email").value==document.getElementById("confirmEmail").value){
   if( ValidateEmail(document.getElementById("email").value)){
       alert("submission successful!");
   }
   else{
      alert("submission unsuccessful:(");  
   }
    }
    else{
        alert("Emails do not match!");
    }
   
    window.location.href="/contact.html"; 
};

 function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}  