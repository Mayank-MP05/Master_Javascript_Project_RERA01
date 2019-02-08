function clicked(num){
    var num = num;

    if(num == 1){
        document.getElementById('frame').src = "/pages/avg.html" ;
    }
    switch(num){
        case 1 : document.getElementById('frame').src = "/pages/avg.html" ;
                break;
            
        case 2 : document.getElementById('frame').src = "/pages/roots.html" ;
                break;
                
        case 3 : document.getElementById('frame').src = "/pages/pandc.html" ;
                break;
                
        case 4 : document.getElementById('frame').src = "/pages/table.html" ;
                break;
                
        case 5 : document.getElementById('frame').src = "/pages/area.html" ;
                break;

        default: document.getElementById('frame').src = "/pages/area.html" ;

    }
}