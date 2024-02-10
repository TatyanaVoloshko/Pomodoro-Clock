let breackDecrem = document.getElementById("break-decrem");
let breackIncrem = document.getElementById("break-increm");
let sessionDecrem = document.getElementById("session-decrem");
let sessionIncrem = document.getElementById("session-increm");
let breack = document.getElementById("break-value");
let session = document.getElementById("session-value");

let timerStart = document.getElementById("timer-start");
let length = document.getElementById("length");
let timer = document.getElementById("timer");

let breackLength = document.getElementById("break-length");
let sessionLength = document.getElementById("session-length");


// break increment and decrement
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

// session increment and decrement
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

// change mode
breackLength.addEventListener("click", function () {
  length.innerText = "Break";
  timer.innerText = breack.textContent;
});

sessionLength.addEventListener("click", function () {
  length.innerText = "Session";
  timer.innerText = session.textContent;
});


// timer 
length.textContent = "Session";
var startTimer;
var startColor;

timerStart.addEventListener("click", function () {
  if (startTimer) {
    setTimeout(() => {
      startTimer = clearInterval(startTimer);
    }, 1000);
  } else {
    if (length.innerText === "Session") {

      // border color 

      timerStart.classList.remove("border-success");

      var borderColor = ["green", "red", "#070478"],
        colorN = 0;

      startColor = setInterval(function () {
        timerStart.style.borderColor = borderColor[colorN];
        colorN = colorN == borderColor.length ? 0 : colorN + 1;
      }, 1000);

      // timer start

      var i = session.textContent;
      startTimer = setInterval(function () {
        i -= 1;
        if (i >= 0) {
          timer.innerText = i;
        } else {
          timer.innerText = breack.textContent;
          length.innerText = "Break";
          timerStart.classList.add("border-success");
          startColor = clearInterval(startColor)
        }
      }, 60000);
    } else if (length.innerText === "Break") {

      // border color

      timerStart.classList.remove("border-success");

      var borderColor = ["green", "red", "#070478"],
        colorN = 0;

      startColor = setInterval(function () {
        timerStart.style.borderColor = borderColor[colorN];
        colorN = colorN == borderColor.length ? 0 : colorN + 1;
      }, 1000);

      // timer start

      var i = breack.textContent;
      startTimer = setInterval(function () {
        i -= 1;
        if (i >= 0) {
          timer.innerText = i;
        } else {
          timer.innerText = session.textContent;
          length.innerText = "Session";
            timerStart.classList.add("border-success");
            startColor = clearInterval(startColor);
        }
      }, 60000);
    }
  }
});






