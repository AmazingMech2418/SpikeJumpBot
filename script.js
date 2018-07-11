var event = document.createEvent("Event");
event.initEvent("keydown",true,true);
function jump() {
document.dispatchEvent(event);
}

function getX() {
return x%300;
}

function read() {
if (getX()<200) {
jump();
}
}

setInterval(read,10);
