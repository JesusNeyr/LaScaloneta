window.addEventListener("load",()=>{

const main_de_jugadores=document.querySelector('[name=main_de_jugadores]')
const section_de_jugadores=document.querySelector('[name=section_jugadores]')

fetch("https://639a535a3a5fbccb5264b073.mockapi.io/jugadores")
.then((response)=>response.json())
.then((data)=>{
    let jugadores = data.map((jugador) => 
        `<div class="col-12 col-sm-6 col-xl-4 p-2 float-start card-jugadores">
            <div class="card">
                <div class="img-wrapper">
                    <img src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" class="card-img-top" alt="${jugador.name}">
                    <span class="dorsal">${jugador.dorsal}</span>
                </div>
                <div class="card-body card-info">
                    <h5 class="card-title">${jugador.name}</h5>
                    <p>Edad: ${jugador.edad}</p>
                    <p>Posición: ${jugador.posicion}</p>
                    <p>Peso: ${jugador["stats-fisico"].peso}</p>
                    <p>Altura: ${jugador["stats-fisico"].altura}</p>
                    <p>Equipo actual: ${jugador["equipo-actual"]}</p>
                    <p>Fecha de nacimiento: ${jugador["fecha-nacimiento"]}</p>
                </div>
            </div>
        </div>
        `
        );
        section_de_jugadores.innerHTML=jugadores.join().replaceAll(",","");
        }
    );
})
