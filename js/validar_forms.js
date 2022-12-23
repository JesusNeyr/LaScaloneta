const validar_form=(msg,element)=>{
    const campo=element.target
    const valor_del_campo=element.target.value;
    if (valor_del_campo.trim().length===0) {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText=msg;
    }else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }
    
}