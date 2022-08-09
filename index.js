const x=setInterval(function(){
let date=new Date(),
    seconds=date.getSeconds(),
    minutes=date.getMinutes(),
    hours=date.getHours(),
    p="AM";

if(hours==0){
  hours=12;
}
else if(hours>=12){
  hours=hours-12;
  p="PM";
}
seconds=seconds<10?"0"+seconds:seconds;
minutes=minutes<10?"0"+minutes:minutes;
hours=hours<10?"0"+hours:hours;

let time=hours+":"+minutes+":"+seconds+" "+p;
document.getElementById("timer").innerText=time;
},0);
