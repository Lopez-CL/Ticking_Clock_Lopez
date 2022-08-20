function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}
function getHourHandAngle(time) {
    time %= 43200; // seconds in 12 hours
    return ((360 * time / 43200) + 180) % 360;
}

function getMinuteHandAngle(time) {
    time %= 3600; // seconds in an hour
    return ((6 * time / 60) + 180) % 360;
}

function getSecondHandAngle(time) {
    time %= 60; // seconds in a minute
    return ((6 * time) + 180) % 360;
}
var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    hour.style.transform = `rotate(${getHourHandAngle(time)}deg)`;
    minutes.style.transform = `rotate(${getMinuteHandAngle(time)}deg)`;
    seconds.style.transform = `rotate(${getSecondHandAngle(time)}deg)`;
}, 1000);/* definitely had to peak at source code for this. A little above me in terms of math and some of JS functionality. More involved than I realized, but I understand cocneptually what is happening.*/