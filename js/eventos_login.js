const email=document.querySelector('[name=email]')
const pass_user=document.querySelector('[name=pass_user]')
const iniciar=document.querySelector('[name=iniciar]')
const form=document.querySelector('#form-login')
email.addEventListener("blur",(element)=>validar_form("campo user requerido",element))
pass_user.addEventListener('blur',(element)=>validar_form("campo password requerido",element))

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    Object.entries(localStorage).forEach(([key, valor]) => {
        if (key ===email.value && valor===pass_user.value) {
            window.location.href="../view/map.html"
            localStorage.setItem("login",true)     
        }
        
    });
    
})