window.addEventListener("load",()=>{

    mostrar=true
    clave=''
    Object.entries(localStorage).forEach(([key, valor]) => {
       
        if (key=="login" && valor=="true") {
            
            mostrar=true
            clave=key
        }else{
            mostrar=false
        }
    });             
    if (mostrar) {

        console.log("mostrar mapa")
    }else{
        
        window.location.href="../view/login.html"
    }
   
// ------------------------------
    const objetoMapa = [
    {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
    },
    {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
    },
    {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
    },
    {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
    ];
    let select_jugadores=document.querySelector('[name=select_jugadores]')
    let agregando_jugadores=objetoMapa.map((element)=>{
        let crear_option=document.createElement("option")
        crear_option.setAttribute("value",`${element.jugador}`)
        let contenido=document.createTextNode(`${element.jugador}`)
        crear_option.appendChild(contenido)
        select_jugadores.appendChild(crear_option)
    })
    
// En center guardamos las coordenadas donde se centra el mapa
let center = [25.2841478, 51.4419568];

// En la variable map enviamos el centro del mapa y el zoom inicial (12).
let map = L.map("map").setView(center, 12);

// Creamos el mapa
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);
select_jugadores.addEventListener("change",(e)=>{
    console.log(e.target.value)
    const objeto = objetoMapa.find((item) => item.jugador === e.target.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada).addTo(map);
    marker.bindPopup(` <b>${objeto.jugador}</b><br>${objeto.ciudad}).openPopup()`);
})
})
