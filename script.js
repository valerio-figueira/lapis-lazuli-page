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



let articles = document.querySelectorAll("article");
let content = document.querySelector(".content");