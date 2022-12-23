const usuario=document.querySelector('[name=usuario]')
const nombre=document.querySelector('[name=nombre]')
const apellido=document.querySelector('[name=apellido]')
const email=document.querySelector('[name=email]')
const pass_user=document.querySelector('[name=pass_user]')
const password_confirm=document.querySelector('[name=password_confirm]')
const form=document.querySelector('[name=form]')

const validar_mail=(element)=>{
    const campo=element.target
    const valor_del_campo=element.target.value
    const regex=new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$^/);
    if (valor_del_campo.trim().lenght>5 && !regex.test(valor_del_campo)) {
        
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText="Por favor ingrese un mail correcto";
    
    } else {
        
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
}

const validar_password_user=(element,password_user,password_a_confirmar)=>{
    const campo=element.target
    if (password_a_confirmar.value!==password_user.value && pass_user.value!==password_a_confirmar) {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error")
        campo.nextElementSibling.innerText="ambas contraseñas deben ser iguales"
    }else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
}
const validar_password_confirm=(element,password_user,password_a_confirmar)=>{
    const campo=element.target
    if (password_a_confirmar.value!==password_user.value && pass_user.value!==password_a_confirmar) {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error")
        campo.nextElementSibling.innerText="ambas contraseñas deben ser iguales"
    }else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
}

usuario.addEventListener("blur",(element)=>validar_form("campo user requerido",element))
pass_user.addEventListener('blur',(element)=>validar_form("campo password requerido",element))
nombre.addEventListener("blur",(element)=>validar_form("este campo solo admite letras",element))
apellido.addEventListener("blur",(element)=>validar_form("este campo solo admite letras",element))
email.addEventListener('input',(element)=>validar_mail(element))
pass_user.addEventListener("input",(element)=>{
    validar_password_user(element,password_confirm,pass_user)
    validar_password_confirm(element,pass_user,password_confirm)
})
password_confirm.addEventListener("input",(element)=>{
    validar_password_confirm(element,pass_user,password_confirm)

})
form.addEventListener("submit",(element)=>{
    element.preventDefault()
    if (pass_user.value !== password_confirm.value && password_confirm!==pass_user) {
        alert("contraseñas diferentes")
    }else{
        let key=email.value
        let valor=pass_user.value
        if (key && valor) {
            localStorage.setItem(key,valor)
            window.location.href="../view/login.html"
            alert("Registrado")
        }
        
    }
})

console.log(localStorage)