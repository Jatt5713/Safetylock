var mobileNav = document.getElementById("mobile-nav");
var bars = document.getElementById("button-bars");
var body = document.getElementsByTagName("body")[0];

var rembery = 0;
mobileNav.onmousemove = function (event){

    mobileNav.style.backgroundPosition = event.clientX/20 + "px " + event.clientY/20 + "px";

}

mobileNav.onclick = function(){
    mobileNav.style.display = "none";
    body.style.height = "auto";
    body.style.overflow = "scroll";
    window.scrollTo(0,rembery - 5);
}


bars.onclick = function(event){
    rembery = event.pageY;
    
    mobileNav.style.display = "flex";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    window.scrollTo(0,0);
}