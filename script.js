let displayTime = document.querySelector(".timer");
let [sec, min, hrs] = [0, 0, 0];
let timer = null;

function stopWatch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      hrs++;
      min = 0;
    }
  }
  h = hrs < 10 ? "0" + hrs : hrs;
  m = min < 10 ? "0" + min : min;
  s = sec < 10 ? "0" + sec : sec;
  displayTime.innerText = h + ":" + m + ":" + s;
}
function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  [sec, min, hrs] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
