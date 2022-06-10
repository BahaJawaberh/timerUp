






let timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           let day = Math.floor(totalSeconds / 86400)
           let hour = Math.floor(totalSeconds /3600);
           let minute = Math.floor((totalSeconds - hour*3600)/60);
           let seconds = totalSeconds - (hour*3600 + minute*60);
           if(day < 10)
                day = "0" + day;
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("counter").innerHTML = day + ":" + hour + ":" + minute + ":" + seconds;
        }







// var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var hoursLabel = document.getElementById("hours");
// var daysLabel = document.getElementById("days");
// var totalSeconds = 0;
// setInterval(setTime, 1);

// function setTime() {
//   ++totalSeconds;
//   secondsLabel.innerHTML = pad(totalSeconds % 60);
//   minutesLabel.innerHTML = pad(parseInt(totalSeconds  / 60));
//   hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600))
//   daysLabel.innerHTML = pad(parseInt(totalSeconds  / 86400))
// }

// function pad(val) {
//   var valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   }
// }

