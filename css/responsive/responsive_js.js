function getl(){
        var ele = document.getElementsByClassName('fixedleftbar');
        document.getElementsByClassName('fixedleftbar').href = 'css/responsive/mobile_getl.css';

        if(ele.style.visibility === 'hidden'){
                ele.style.visibility = 'block';
        }else if(ele.style.visibility === 'block'){
                ele.style.visibility = 'hidden';
        }
      
}

function mobilegetlist(){
        var value_to_pass = document.getElementById("mobile_select").value ;
        clicked(value_to_pass);
}
function showbar(){
    
var width = window.innerWidth;
var x = document.getElementById("leftbar");

if(width < 410){
        document.getElementById('home1').href = '';
        document.getElementById('manually').href = '';
        document.getElementById('csslink').href = "css/responsive/mobile.css";
        mobilegetlist();
        getl();
}else{
        document.getElementById('home1').href = 'css/HomeCSS/home.css';
        document.getElementById('manually').href = 'css/manually.css';
        document.getElementById('csslink').href = "";

}
}

