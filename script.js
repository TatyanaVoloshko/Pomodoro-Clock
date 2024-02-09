let breackDecrem = document.getElementById("break-decrem");
let breackIncrem = document.getElementById("break-increm");
let sessionDecrem = document.getElementById("session-decrem");
let sessionIncrem = document.getElementById("session-increm");
let breack = document.getElementById("break-value");
let session = document.getElementById("session-value");

breackDecrem.addEventListener("click", function () {
  var i = breack.textContent;
  i--;
  if (i >= 0) {
    breack.innerText = i;
  } else {
    breack.innerText = 0;
  }
});

breackIncrem.addEventListener("click", function () {
  var i = breack.textContent;
  i++;
  if (i <= 60) {
    breack.innerText = i;
  } else {
    breack.innerText = 60;
  }
});

sessionDecrem.addEventListener("click", function () {
  var i = session.textContent;
  i--;
  if (i >= 0) {
    session.innerText = i;
  } else {
    session.innerText = 0;
  }
});

sessionIncrem.addEventListener("click", function () {
  var i = session.textContent;
  i++;
  if (i <= 60) {
    session.innerText = i;
  } else {
    session.innerText = 60;
  }
});

let timerStart = document.getElementById("timer-start");
let length = document.getElementById("length");
let timer = document.getElementById("timer");

length.textContent = "Session";

var startTimer;

timerStart.addEventListener("click", function () {
  if (startTimer) {
    setTimeout(() => {
      startTimer = clearInterval(startTimer);
    }, 1000);
  } else {
    if (length.innerText === "Session") {
      var i = session.textContent;
      startTimer = setInterval(function () {
        i -= 1;
        if (i >= 0) {
          timer.innerText = i;
        } else {
          timer.innerText = breack.textContent;
          length.innerText = "Break";
        }
      }, 60000);
    } else if (length.innerText === "Break") {
      var i = breack.textContent;
      startTimer = setInterval(function () {
        i -= 1;
        if (i >= 0) {
          timer.innerText = i;
        } else {
          timer.innerText = session.textContent;
          length.innerText = "Session";
        }
      }, 60000);
    }
  }
});

let breackLength = document.getElementById("break-length");
let sessionLength = document.getElementById("session-length");

breackLength.addEventListener("click", function () {
  length.innerText = "Break";
  timer.innerText = breack.textContent;
});

sessionLength.addEventListener("click", function () {
  length.innerText = "Session";
  timer.innerText = session.textContent;
});
