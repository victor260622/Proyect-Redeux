import calcularEnvio from "./calcularEnvio.js";
let elementos = document.querySelectorAll(".tipos")
let envio;
elementos.forEach(item => {
    let id = item.id;
    item.addEventListener('click', () => {      
        if(id >= 1 <= 3){
            item.classList.add('active')
            envio = id
        }
    })
    
})
export default function calculate (event){
    event.preventDefault();
    /***** OBTENEMOS LA INFORMACION NECESARIA DE LOS INPUTS *****/
    const d = new Date();
    let month = d.getMonth() + 1;
    let pesoDelPaquete = document.getElementById("peso").value;
    let alturaDelPaquete = document.getElementById("altura").value;
    let anchoDelPaquete = document.getElementById("ancho").value;  
    let envioSeleccionado = envio;

    
    /***** OBTENEMOS LA INFORMACION DE LOS INPUTS Y LO GUARDAMOS EN LE SESSIONSTORAGE *****/
    sessionStorage.setItem('Nombre', document.getElementById("nombre").value)
    sessionStorage.setItem('Apellido', document.getElementById("apellido").value)
    sessionStorage.setItem('Correo', document.getElementById("correo").value)
    sessionStorage.setItem('Direccion', document.getElementById("direccion").value)

    /***** PASAMOS LA INFORMACION NECESARIA A TIPO NUMERO Y EJECUTAMOS LA FUNCION IMPORTADA *****/
    try{
        envioSeleccionado= parseFloat(envioSeleccionado, 10)
        pesoDelPaquete = parseFloat(pesoDelPaquete, 10)
        alturaDelPaquete = parseFloat(alturaDelPaquete, 10)
        anchoDelPaquete = parseFloat(anchoDelPaquete, 10)
        calcularEnvio(month, pesoDelPaquete, alturaDelPaquete, anchoDelPaquete, envioSeleccionado);

    } catch(e){
        console.log(error)
    }
 

    
}
