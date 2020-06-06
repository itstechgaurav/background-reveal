let mouse = document.getElementById("mouse");
document.body.addEventListener("mousemove", _ => {
    mouse.style.top = _.y + "px";
    mouse.style.left = _.x + "px";
})