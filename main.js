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