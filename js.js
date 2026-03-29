document.addEventListener("DOMContentLoaded", () =>{
    crearNieve();

   window.addEventListener("resize", () => {
    document.querySelectorAll(".snowflake").
    forEach(flake => flake.remove());
    crearNieve();
   });
});

function crearNieve(){
    const numberOfFlakes =
    window.innerWidth < 600 ? 25 : 50;

    for(let i = 0; i < numberOfFlakes; i++){
        const snowflake = document.createElement ("img");

    snowflake.classList.add("snowflake");
    snowflake.src = "Copos.png";

    //tamaño
    const size = Math.random() * 15 + 5;
    snowflake.style.width = size + "px";
    snowflake.style.height = "auto";

    //posicion horizontal
    snowflake.style.left =
Math.random() * window.innerWidth + "px";
    
   //posicion inicial
   snowflake.style.position = "absolute";
   snowflake.style.top = "-50px";

   //velocidad
   const duration = Math.random() * 5 + 5;

   snowflake.style.animationDuration = duration + "s";

   //delay
   const delay = Math.random() * 5;
   snowflake.style.animationDelay = delay + "s";

   document.body.appendChild(snowflake);
    }
}
