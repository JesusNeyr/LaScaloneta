const cerrar_sesion=document.querySelector('[name=close-session]')

cerrar_sesion.addEventListener('click',() =>{
    localStorage.removeItem("loged")
    window.location.href = "../index.html";
})
