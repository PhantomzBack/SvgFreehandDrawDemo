var mousedownID = -1;  //Global ID of mouse down interval

function mousedown(event) {
    const whilemousedown = () => { // anonymous function
    }
    if (mousedownID == -1)  //Prevent multiple loops!
        mousedownID = setInterval(whilemousedown, 100 /*execute every 100ms*/);
}
function mouseup(event) {
    if (mousedownID != -1) {  //Only stop if exists
        clearInterval(mousedownID);
        mousedownID = -1;
    }
}

document.addEventListener("mousedown", mousedown);
document.addEventListener("mouseup", mouseup);
//Also clear the interval when user leaves the window with mouse
document.addEventListener("mouseout", mouseup);