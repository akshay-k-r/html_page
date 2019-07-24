// Created by AKSHAY KR



var ID = document.getElementById.bind(document);


window.onload = function()
{
  var sec, min, hr, clock, secondHand,dat, minuteHand, hourHand, secDeg, minDeg, hrDeg;
  
  
  //loading clock
  function loadClock()
  {
    sec = new Date().getSeconds();
    min = new Date().getMinutes();
    hr = new Date().getHours();
    clock = ID("clock-wrapper");;
    secondHand = ID("clock-second");
    minuteHand = ID("clock-minute");
    hourHand = ID("clock-hour");
    secDeg = sec * 6;    minDeg = (min + (sec / 60)) * 6; 
    hrDeg = ((hr - 12) * 30) + ((min / 60) * 30);
  }
  loadClock();
  document.addEventListener("visibilitychange", loadClock);
  
  
  //starting clock
  var startClock = setInterval(function()
  {
    secondHand.style.WebkitTransform = "rotate(" + secDeg + "deg)";
    minuteHand.style.WebkitTransform = "rotate(" + minDeg + "deg)";
    hourHand.style.WebkitTransform = "rotate(" + hrDeg + "deg)";
    secondHand.style.transform = "rotate(" + secDeg + "deg)";
    minuteHand.style.transform = "rotate(" + minDeg + "deg)";
    hourHand.style.transform = "rotate(" + hrDeg + "deg)";
    secDeg += 6;    minDeg += 0.1;      hrDeg += 0.1/60;
    dat = new Date();
    hr = new Date().getHours();
    if (hr > 11) ID("am-pm").innerHTML = "PM";
    else ID("am-pm").innerHTML = "AM";
    
  //  dat = dat + new Date().getMonth();
    ID ("my-name").innerHTML = dat.toDateString() ;
  }, 1000);


  //creating hours strokes
  for (var i = 1, spanDeg = 0, top, right; i < 13; i++, spanDeg += 30)
  {
    top = (Math.cos(spanDeg * Math.PI/180) * 140).toFixed(4);
    right = (Math.sin(spanDeg * Math.PI/180) * 140).toFixed(4);
    clock.insertAdjacentHTML("beforeend", "<span class='digits d" + i + "'></span>");
    clock.getElementsByClassName("d"+i)[0].style.WebkitTransform = "rotate(" + spanDeg + "deg)";
    clock.getElementsByClassName("d"+i)[0].style.transform = "rotate(" + spanDeg + "deg)";
    clock.getElementsByClassName("d"+i)[0].style.top = (140 - top) + "px";
    clock.getElementsByClassName("d"+i)[0].style.right = (148 - right) + "px";
  }
  
  //creating minutes strokes
  for (var i = 0, spanDeg = 0, top, right; i < 360; i++, spanDeg += 6)
  {
    if (i % 30 != 0)
    {
      top = (Math.cos(spanDeg * Math.PI/180) * 140).toFixed(4);
      right = (Math.sin(spanDeg * Math.PI/180) * 140).toFixed(4);
      clock.insertAdjacentHTML("beforeend", "<span class='mini-digits md" + i + "'></span>");
      clock.getElementsByClassName("md"+i)[0].style.WebkitTransform = "rotate(" + spanDeg + "deg)";
      clock.getElementsByClassName("md"+i)[0].style.transform = "rotate(" + spanDeg + "deg)";
      clock.getElementsByClassName("md"+i)[0].style.top = (147 - top) + "px";
      clock.getElementsByClassName("md"+i)[0].style.right = (149 - right) + "px";
    }
    else continue;
  }
} 