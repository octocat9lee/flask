var log = function() {
    console.log.apply(console, arguments);
}

var startTimer = function(duration, display) {
    var refresh = setInterval(function() {
        var minutes = parseInt(duration / 60);
        var seconds = parseInt(duration % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var output = minutes + " : " + seconds;
        display.text(output);
        $("title").html(output + " - TimerTimer");

        if(--duration < 0) {
            display.text("Time's Up!");
            clearInterval(refresh);  // exit refresh loop
            var music = $("#over_music")[0];
            music.play();
            alert("Time's Up!");
        }
    }, 1000);
}

var _main = function() {
    var display = $('#time');
    var secondsStr = $('.timer').data('seconds');
    var seconds = parseInt(secondsStr);
    startTimer(seconds, display);
}

$(document).ready(function() {
    _main();
})
