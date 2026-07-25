const bell = document.getElementById("bell");
const light = document.getElementById("light");
const button = document.querySelector(".notify-btn");


bell.addEventListener("click", ringBell);
button.addEventListener("click", ringBell);
function ringBell(){
    bell.style.animation = "none";
    bell.offsetHeight;
    bell.style.animation = "ring .8s ease";
    light.style.transition = ".3s";
    light.style.transform = "scale(1.4)";
    light.style.opacity = "1";
    light.style.filter = "blur(25px)";

    
    button.style.transform = "scale(.95)";
    setTimeout(()=>{

        bell.style.animation = "swing 3s ease-in-out infinite";

        light.style.transform = "scale(1)";
        light.style.opacity = ".6";
        light.style.filter = "blur(18px)";

        button.style.transform = "scale(1)";

    },800);

}