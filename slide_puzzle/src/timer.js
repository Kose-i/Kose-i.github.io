/*timer class*/
var timer = new Boolean(false);
var strTimer = new Number(0);
function timerStart()
{
  timer = true;
}
function timerStop()
{
  timer = false;
}
function timerReset()
{
  strTimer = 0;
  var Timer = document.getElementById("Timer");
  Timer.value = strTimer.toString();
}
function timeRun()
{
  setTimeout("timeRun()",1000);
  if (timer == true) {
    var Timer = document.getElementById("Timer");
    Timer.value = strTimer.toString();
    strTimer = strTimer+1;
  }
}
