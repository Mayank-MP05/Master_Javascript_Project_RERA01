function clicked(num){
    var num = num;
    console.log(num);

    if(num == 1){
        document.getElementById('iframe_used').src = "pages/avg.html" ;
    }else if(num == 2){   
        document.getElementById('iframe_used').src = "pages/roots.html" ;
    }else if(num == 3){
        document.getElementById('iframe_used').src = "pages/pandc.html" ;
    }else if(num == 4){
        document.getElementById('iframe_used').src = "pages/table.html" ;
    }else if(num == 5){    
        document.getElementById('iframe_used').src = "pages/area.html" ;
    }else{    
        document.getElementById('iframe_used').src = "pages/area.html" ;
        }
    }