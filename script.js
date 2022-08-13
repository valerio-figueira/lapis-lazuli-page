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




/*Posts' Paragraphs */
const paragraphs = document.querySelectorAll(".paragraph");

paragraphs[0].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt pariatur vel expedita quisquam quibusdam laudantium aperiam, quidem tempore iusto sunt nostrum quae quasi eaque ipsa velit quas architecto fugit? Sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium qui eos cupiditate sit fugit ullam molestiae labore quam iusto, natus nobis omnis harum consectetur quas consequuntur aspernatur commodi autem eaque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque tempora vel veritatis dolorem id corporis saepe nostrum ratione eveniet reiciendis esse, animi libero unde similique alias! Enim officia tenetur dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eum dicta amet, ullam rerum expedita accusantium nesciunt doloremque delectus ex minus praesentium recusandae omnis quo tempora cum molestiae fugit dolor?";

paragraphs[1].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ab quaerat, ipsa quibusdam doloremque iusto explicabo autem perspiciatis animi consequuntur adipisci doloribus reiciendis est harum tempore alias provident iure accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque animi similique, rerum, necessitatibus blanditiis voluptates error a dolor ipsum laboriosam nam impedit cupiditate dolorum est dolores maiores consequatur rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quas obcaecati corrupti error explicabo exercitationem consequuntur consequatur omnis. Ad repellendus incidunt officiis, adipisci deleniti ratione hic ipsa deserunt. Suscipit, nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, tenetur nihil temporibus saepe, dolor similique consequuntur exercitationem qui voluptas dicta architecto modi maxime repellendus facilis velit suscipit? Expedita, dolore rem!";

paragraphs[2].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore, blanditiis rerum explicabo voluptatem eum nemo recusandae culpa maxime velit? Alias repellat inventore dolore aliquam quas labore numquam esse fugiat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fugit corrupti ab dolores accusamus laboriosam fuga tenetur, distinctio nemo, nostrum nesciunt aspernatur. Nobis neque quaerat iste, tempora voluptatum error pariatur.";

paragraphs[3].textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo maxime, repudiandae eligendi quod quo, distinctio vero sed nesciunt, nulla enim facere! Aliquam obcaecati odio quidem, aliquid debitis excepturi hic ratione.";

paragraphs[4].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos quia distinctio perspiciatis? Commodi minus aliquid amet est, corporis dolorum odio consequatur ipsa cumque hic incidunt, nihil totam magnam cupiditate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium voluptatibus voluptatum qui at voluptate eaque, architecto, quo quae quis veritatis dicta consequatur eveniet incidunt tempore quaerat? Consectetur, quam voluptate!";