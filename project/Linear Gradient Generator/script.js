var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var body = document.getElementById("gradient");
var slider = document.getElementById("range");

function Gradient() {
    body.style.background = "linear-gradient(" + slider.value + "deg," + color1.value + "," + color2.value + "," + color3.value + ")";
    document.getElementById("box").value = slider.value + "deg" + " , " + color1.value + " , " + color2.value + " , " + color3.value;
}

color1.addEventListener("input", Gradient);
color2.addEventListener("input", Gradient);
color3.addEventListener("input", Gradient);
slider.addEventListener("input", Gradient);