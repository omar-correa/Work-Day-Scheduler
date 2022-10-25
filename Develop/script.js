var timeInterval = setInterval(function (){
    var currentDay=moment();
    $("#currentDay").text(currentDay.format ("MMM Do, YYYY H:mm:ss"));
})