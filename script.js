let mobile = document.querySelector(".mobile");

mobile.addEventListener('click', function(){
    let responsive = document.querySelector(".navbar");
    if(responsive.className === "navbar"){
        responsive.className += " responsive";
        mobile.className += " active";
    } else{
        responsive.className = "navbar";
        mobile.className = "mobile";
    }
})


let year = new Date().getFullYear();
let copyright = document.querySelector("#copyright");
copyright.innerHTML += `${year} All rights reserved - Lapis Lazuli`;



const mainTitle = document.querySelector("#main-title");

mainTitle.addEventListener("mouseenter", function(){
    mainTitle.style.cursor = "pointer";
    mainTitle.addEventListener("click", function(){
        window.open("./index.html", "_self");
    })
})