var clock = setInterval(function(){
    var today = new Date();

    var dd = today.getDate();
    var mm = today.toDateString().split(" ")[1];
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
    var day = dd + " " + mm + " " + yyyy;
    document.getElementById("date").innerText = day;



    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var meridian = "PM" ;
    var wish = "Evening";

    if(hr>=0 && hr<=11){
        if(hr == 0) hr =12;  
        wish = "Morning"
        meridian = "AM"
    }
    else if(hr>=12 && hr<=16){
        wish = "Afternoon"
    }

    if(hr>12){
        hr -= 12;
    }

    if(hr < 10){
        hr = "0"+hr;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }

    var time = hr + ":" + min + ":" + sec + " " + meridian;
    document.getElementById("time").innerText = time;

    wish = "Good "+wish;
    document.getElementById("wishes").innerText = wish;

} , 1000);

