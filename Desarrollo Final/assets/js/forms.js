function enviarForm(){
    form = document.getElementById("email-form")

    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        let mensaje = document.createElement("span")
        mensaje.innerHTML = "Se envio el formulario"
        form.appendChild(mensaje)
    })
}

enviarForm()