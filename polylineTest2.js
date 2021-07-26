var mousedownID = -1; //Global ID of mouse down interval
var arrPos=[];
var bodyRect, elemRect, offset;
function mousedown(event) {
    if (mousedownID == -1) {//Prevent multiple loops!
        bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.getElementById("dispSvg").getBoundingClientRect(),
        offsetY = elemRect.top - bodyRect.top;
        offsetX = elemRect.left - bodyRect.left;
        arrPos=[];
        mousedownID = 1;
    }
}
function mouseup(event) {
    mousedownID = -1;
    let text1=arrPos.toString();
    polyLineObj=document.getElementById("shape");
    polyLineObj.setAttribute("points", text1);

    console.log(text1);
    if (mousedownID != -1) { //Only stop if exists
        mousedownID = -1;
        
    }
}
var mousemove = function (event) {
    var mouseEvent = event;
    if(mousedownID == 1){
        var posX=mouseEvent.clientX-offsetX;
        var posY=mouseEvent.clientY-offsetY;
        var posXY=[posX, posY];
        arrPos.push(posXY);
        let text1=arrPos.toString();
        polyLineObj=document.getElementById("shape");
        polyLineObj.setAttribute("points", text1);
    }
};
document.addEventListener("mousedown", mousedown);
document.addEventListener("mousemove", mousemove);
document.addEventListener("mouseup", mouseup);