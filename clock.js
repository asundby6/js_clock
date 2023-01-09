const secondHand = document.querySelector("#second");
const minuteHand = document.querySelector("#minute");
const hourHand = document.querySelector("#hour");

const now = new Date();
let sec = now.getSeconds();
let min = now.getMinutes();
let hr = now.getHours();

let secPosition = sec*360/60;
let minPosition = (min*360/60) + (sec*(360/60)/60);
let hrPosition = (hr*360/12) + (min*(360/60)/12);


function startClock() {
  
  hrPosition = hrPosition + (3/360);
  minPosition = minPosition + (6/60);
  secPosition = secPosition + 6;
 
  secondHand.style.transform = "rotate(" + hrPosition + "deg)";
  minuteHand.style.transform = "rotate(" + minPosition + "deg)";
  hourHand.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(startClock, 1000);