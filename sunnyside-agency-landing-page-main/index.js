
let hamburguer=document.getElementById('hamb')

hamburguer.addEventListener("click",()=>{

    const show = document.querySelector(".nonemenu");

    if (show.style.display === "block") {
      show.style.display = "none";
    } else {
      show.style.display = "block";
    }

})

