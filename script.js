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