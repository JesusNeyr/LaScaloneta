
const burguer=document.querySelector('#burger')
const ul=document.querySelector("ul")
const formulario_general=document.querySelector('.form_general')

const li=document.createElement("li")
const a=document.createElement("a")

const li_de_map=document.createElement("li")
const a_de_map=document.createElement("a")
const contenido_de_a_map=document.createTextNode("Map")

const li_de_jugadores=document.createElement("li")
const a_de_jugadores=document.createElement("a")
const contenido_de_a_jugadores=document.createTextNode("Jugadores")

const login_li=document.querySelector('[name=login_li]')
const contenido=document.createTextNode("Log out")

burguer.addEventListener("click",()=>{
    ul.classList.toggle("show")
    formulario_general.classList.toggle("form_general")
})
mostrar=true
Object.entries(localStorage).forEach(([key, valor]) => {
   
    if (key=="login" && valor=="true") {      
        mostrar=true
        clave=key
    }else{
        mostrar=false
    }
});             
if (mostrar) {
    login_li.style.display="none"
    a_de_map.appendChild(contenido_de_a_map)
    li_de_map.appendChild(a_de_map)
    li_de_map.style.cursor="pointer"
    ul.appendChild(li_de_map)

    a.appendChild(contenido)
    li.appendChild(a)
    li.style.cursor="pointer"
    ul.appendChild(li)

    a_de_jugadores.appendChild(contenido_de_a_jugadores)
    li_de_jugadores.appendChild(a_de_jugadores)
    li_de_jugadores.style.cursor="pointer"
    ul.appendChild(li_de_jugadores)

    a.addEventListener("click",()=>{
        a.setAttribute("href","/view/login.html")
        localStorage.removeItem(clave)
    })
    a_de_map.addEventListener("click",()=>{
        a_de_map.setAttribute("href","/view/map.html")
    })
    a_de_jugadores.addEventListener("click",()=>{
        a_de_jugadores.setAttribute("href","/view/jugadores.html")
    })
    
}