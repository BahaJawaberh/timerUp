var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var hoursLabel = document.getElementById("hours");
var daysLabel = document.getElementById("days");
var totalSeconds = 0;
setInterval(setTime, 1);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  hoursLabel.innerHTML = pad(parseInt(totalSeconds / 60*60))
  daysLabel.innerHTML = pad(parseInt(totalSeconds  /3600*24))
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
