const email=document.querySelector('[name=email]')
const pass_user=document.querySelector('[name=pass_user]')
const iniciar=document.querySelector('[name=iniciar]')

const form=document.querySelector('#form-login')
email.addEventListener("blur",(element)=>validar_form("campo user requerido",element))
pass_user.addEventListener('blur',(element)=>validar_form("campo password requerido",element))

const credenciales = {
    email: "estudiante@guayerd.com",
    password: "123456",
};
if (localStorage.getItem("loged") == "true"){
    window.location.href = "../view/map.html";
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (credenciales.email!=email.value && credenciales.password!=pass_user.value) {
        alert("Ups algo salio mal, revisa mail o tu contraseña")
        
    }else{
        localStorage.setItem("loged",true)
        window.location.href = "../view/map.html";
    }
})