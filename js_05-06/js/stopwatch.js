var mSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var ms = document.getElementsByClassName('mseconds');
var s = document.getElementsByClassName('seconds');
var m = document.getElementsByClassName('minutes');
var h = document.getElementsByClassName('hours');

var run = 0;

var startPause = document.getElementById('start');
var stop = document.getElementById('stop');

function startClick() {
  if (run === 0) {
    run = 1;
    startPause.setAttribute('value', 'PAUSE');
    stop.setAttribute('value', 'STOP');
    stopwatchInterval = setInterval(function() {
      if (!prevTime) {
        prevTime = Date.now();
      }
      elapsedTime += Date.now() - prevTime;
      prevTime = Date.now();
      startWatch();
    }, 10);
  } else {
    run = 0;
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    prevTime = null;
    startPause.setAttribute('value', 'CONT...');
  }
}

function stopClick() {
  if (run === 1) {
    run = 0;
    stop.setAttribute('value', 'RESET');
    startPause.setAttribute('value', 'START');
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    prevTime = null;
    elapsedTime = 0;
    var split = document.createElement('li');
    split.classList.add('splitcount');
    split.innerHTML = 'STOP' + '&nbsp&nbsp&nbsp&nbsp' + hours + ':' + minutes + ':' + seconds + ':' + mSeconds;
    splitlist.appendChild(split);
  } else {
    run = 0;
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    prevTime = null;
    elapsedTime = null;
    startPause.setAttribute('value', 'START');
    ms[0].innerHTML = '000';
    s[0].innerHTML = '00';
    m[0].innerHTML = '00';
    h[0].innerHTML = '00';
    list.removeChild(splitlist);
    var splitDom = document.createElement('ul');
    splitDom.setAttribute('id', 'splitlist');
    list.appendChild(splitDom);
    stop.setAttribute('value', 'STOP');
  }
}

function splitClick() {
  var split = document.createElement('li');
  split.classList.add('splitcount');
  split.innerHTML = 'SPLIT' + '&nbsp&nbsp&nbsp&nbsp' + hours + ':' + minutes + ':' + seconds + ':' + mSeconds;
  splitlist.appendChild(split);
  if (run === 0) {
    clearInterval(stopwatchInterval);
    splitlist.removeChild(split);
  }
}

startPause.addEventListener('click', startClick);
stop.addEventListener('click', stopClick);
split.addEventListener('click', splitClick);

var prevTime, stopwatchInterval, elapsedTime = 0;

function startWatch() {
  var tempTime = elapsedTime;
  mSeconds = tempTime % 1000;
  tempTime = Math.floor(tempTime / 1000);
  seconds = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  minutes = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  hours = tempTime % 60;

  if (mSeconds < 10) {
    mSeconds = '00' + mSeconds;
  } else if (mSeconds < 100) {
    mSeconds = '0' + mSeconds;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }

  ms[0].innerHTML = mSeconds;
  s[0].innerHTML = seconds;
  m[0].innerHTML = minutes;
  h[0].innerHTML = hours;

}
