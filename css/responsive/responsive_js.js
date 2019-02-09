function showbar(){
    
var width = window.innerWidth;
var x = document.getElementById("leftbar");
 
if(width < 410){
        document.getElementById('home1').href = '';
        document.getElementById('home2').href = '';
        document.getElementById('manually').href = '';
        document.getElementById('csslink').href = "css/responsive/mobile.css"
}else{
        document.getElementById('home1').href = '';
        document.getElementById('home1').href = '';
        document.getElementById('home2').href = '';
        document.getElementById('manually').href = '';
        document.getElementById('csslink').href = "css/responsive/mobile.css";
}
}