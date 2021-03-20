function drop() {
    var element = document.getElementById("drop");
    if (element.classList.contains("hide")) {
        element.classList.remove("hide");
        element.classList.add("drop");
    }
    else {
        element.classList.remove("drop");
        element.classList.add("hide");
    }
}
function mouseOver(a) {
    document.getElementById(a).style.background= '#e8f0fe'
}
function mouseOut(a) {
    document.getElementById(a).style.background = "";
}
